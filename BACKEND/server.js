import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

// =====================================================
// CORS
// =====================================================

app.use(
  cors({
    origin: [
      "https://dogpet-1dc2.vercel.app/",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// =====================================================
// BODY PARSER
// =====================================================

app.use(express.json());

// =====================================================
// RESEND
// =====================================================

const resend = new Resend(process.env.RESEND_API_KEY);

// =====================================================
// TEST ROUTE
// =====================================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🐾 PET CARE Backend Running",
  });
});

// =====================================================
// BOOKING API
// =====================================================

app.post("/api/booking", async (req, res) => {
  try {
    console.log("📩 Booking request received");

    console.log("Booking Data:");
    console.log(req.body);

    // =================================================
    // GET DATA FROM FRONTEND
    // =================================================

    const {
      fullName,
      email,
      phone,
      petName,
      petType,
      service,
      preferredDate,
      requirements,
      message,
    } = req.body;

    // =================================================
    // VALIDATION
    // =================================================

    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        message: "Full name and email are required.",
      });
    }

    // =================================================
    // SEND EMAIL
    // =================================================

    const { data, error } = await resend.emails.send({
      // Testing sender provided by Resend
      from: "PET CARE <onboarding@resend.dev>",

      // Your Easyname email
      to: [process.env.MAIL_TO],

      // When you reply to the email,
      // it will reply to the customer
      replyTo: email,

      subject: `New Consultation Request — ${fullName}`,

      // =================================================
      // HTML EMAIL
      // =================================================

      html: `
<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>PET CARE Consultation</title>

</head>


<body
  style="
    margin:0;
    padding:0;
    background-color:#f4f1ec;
    font-family:Arial,Helvetica,sans-serif;
  "
>


  <!-- MAIN CONTAINER -->

  <div
    style="
      width:100%;
      padding:40px 15px;
      box-sizing:border-box;
      background-color:#f4f1ec;
    "
  >


    <!-- EMAIL CARD -->

    <div
      style="
        max-width:650px;
        margin:0 auto;
        background-color:#ffffff;
        border-radius:18px;
        overflow:hidden;
        box-shadow:0 5px 25px rgba(0,0,0,0.08);
      "
    >


      <!-- ========================================= -->
      <!-- HEADER -->
      <!-- ========================================= -->

      <div
        style="
          background-color:#263b2f;
          padding:35px 25px;
          text-align:center;
        "
      >

        <div
          style="
            font-size:42px;
            margin-bottom:10px;
          "
        >
          🐾
        </div>


        <h1
          style="
            margin:0;
            color:#ffffff;
            font-size:30px;
            font-weight:700;
            letter-spacing:1px;
          "
        >
          PET CARE
        </h1>


        <p
          style="
            margin:10px 0 0;
            color:#dce5dd;
            font-size:14px;
          "
        >
          New Consultation Request
        </p>

      </div>



      <!-- ========================================= -->
      <!-- CONTENT -->
      <!-- ========================================= -->

      <div
        style="
          padding:35px 30px;
        "
      >


        <h2
          style="
            margin:0 0 12px;
            color:#263b2f;
            font-size:23px;
          "
        >
          New Booking Received
        </h2>


        <p
          style="
            margin:0 0 28px;
            color:#666666;
            font-size:15px;
            line-height:1.7;
          "
        >
          A new consultation request has been submitted
          through your PET CARE website.
        </p>



        <!-- ========================================= -->
        <!-- CUSTOMER DETAILS -->
        <!-- ========================================= -->

        <div
          style="
            border:1px solid #e5e5e5;
            border-radius:14px;
            overflow:hidden;
            margin-bottom:20px;
          "
        >

          <div
            style="
              background-color:#f3f5f2;
              padding:16px 20px;
              color:#263b2f;
              font-size:16px;
              font-weight:bold;
            "
          >
            👤 Customer Details
          </div>


          <div
            style="
              padding:20px;
            "
          >

            <p
              style="
                margin:0 0 12px;
                color:#444444;
                font-size:14px;
              "
            >
              <strong>Full Name:</strong>
              ${fullName}
            </p>


            <p
              style="
                margin:0 0 12px;
                color:#444444;
                font-size:14px;
              "
            >
              <strong>Email:</strong>
              ${email}
            </p>


            <p
              style="
                margin:0;
                color:#444444;
                font-size:14px;
              "
            >
              <strong>Phone:</strong>
              ${phone || "Not provided"}
            </p>

          </div>

        </div>



        <!-- ========================================= -->
        <!-- PET DETAILS -->
        <!-- ========================================= -->

        <div
          style="
            border:1px solid #e5e5e5;
            border-radius:14px;
            overflow:hidden;
            margin-bottom:20px;
          "
        >

          <div
            style="
              background-color:#f3f5f2;
              padding:16px 20px;
              color:#263b2f;
              font-size:16px;
              font-weight:bold;
            "
          >
            🐶 Pet Details
          </div>


          <div
            style="
              padding:20px;
            "
          >

            <p
              style="
                margin:0 0 12px;
                color:#444444;
                font-size:14px;
              "
            >
              <strong>Pet Name:</strong>
              ${petName || "Not provided"}
            </p>


            <p
              style="
                margin:0 0 12px;
                color:#444444;
                font-size:14px;
              "
            >
              <strong>Pet Type:</strong>
              ${petType || "Not provided"}
            </p>


            <p
              style="
                margin:0 0 12px;
                color:#444444;
                font-size:14px;
              "
            >
              <strong>Service:</strong>
              ${service || "Not provided"}
            </p>


            <p
              style="
                margin:0;
                color:#444444;
                font-size:14px;
              "
            >
              <strong>Preferred Date:</strong>
              ${preferredDate || "Not provided"}
            </p>

          </div>

        </div>



        <!-- ========================================= -->
        <!-- ADDITIONAL INFORMATION -->
        <!-- ========================================= -->

        <div
          style="
            border:1px solid #e5e5e5;
            border-radius:14px;
            overflow:hidden;
            margin-bottom:20px;
          "
        >

          <div
            style="
              background-color:#f3f5f2;
              padding:16px 20px;
              color:#263b2f;
              font-size:16px;
              font-weight:bold;
            "
          >
            📝 Additional Information
          </div>


          <div
            style="
              padding:20px;
            "
          >

            <p
              style="
                margin:0 0 18px;
                color:#444444;
                font-size:14px;
                line-height:1.7;
              "
            >

              <strong>Requirements:</strong>

              <br>

              ${requirements || "Not provided"}

            </p>


            <p
              style="
                margin:0;
                color:#444444;
                font-size:14px;
                line-height:1.7;
              "
            >

              <strong>Message:</strong>

              <br>

              ${message || "Not provided"}

            </p>

          </div>

        </div>



        <!-- ========================================= -->
        <!-- ACTION MESSAGE -->
        <!-- ========================================= -->

        <div
          style="
            margin-top:25px;
            padding:20px;
            background-color:#eef4ee;
            border-radius:14px;
            text-align:center;
          "
        >

          <p
            style="
              margin:0;
              color:#263b2f;
              font-size:14px;
              line-height:1.6;
            "
          >
            Please review this consultation request
            and contact the customer when convenient.
          </p>

        </div>


      </div>



      <!-- ========================================= -->
      <!-- FOOTER -->
      <!-- ========================================= -->

      <div
        style="
          background-color:#263b2f;
          padding:22px 20px;
          text-align:center;
        "
      >

        <p
          style="
            margin:0;
            color:#ffffff;
            font-size:14px;
            font-weight:bold;
          "
        >
          🐾 PET CARE
        </p>


        <p
          style="
            margin:7px 0 0;
            color:#cbd7ce;
            font-size:12px;
          "
        >
          This email was generated from the PET CARE website.
        </p>

      </div>


    </div>

  </div>

</body>

</html>
      `,
    });

    // =================================================
    // RESEND ERROR
    // =================================================

    if (error) {
      console.error("❌ RESEND EMAIL ERROR");
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Failed to send consultation email.",
        error: error.message || error,
      });
    }

    // =================================================
    // SUCCESS
    // =================================================

    console.log("✅ EMAIL SENT SUCCESSFULLY");

    console.log(
      "Resend Email ID:",
      data?.id
    );

    return res.status(200).json({
      success: true,
      message: "Consultation request sent successfully.",
      id: data?.id,
    });

  } catch (error) {

    // =================================================
    // SERVER ERROR
    // =================================================

    console.error("❌ BOOKING ERROR");

    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Something went wrong while sending the email.",
    });
  }
});


// =====================================================
// SERVER START
// =====================================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `🚀 Server running on port ${PORT}`
  );

});