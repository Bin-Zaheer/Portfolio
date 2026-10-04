import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY,
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      service,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name, email and message are required.",
        },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: "Resend API key is missing.",
        },
        { status: 500 },
      );
    }

    const { data, error } =
      await resend.emails.send({
        from: "Website Contact <onboarding@resend.dev>",
        to: ["binzaheer992@gmail.com"],
        replyTo: email,

        subject: `New Project Enquiry — ${name}`,

        html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Project Enquiry</title>
          </head>

          <body
            style="
              margin:0;
              padding:0;
              background:#f3f1eb;
              font-family:Arial, Helvetica, sans-serif;
              color:#292621;
            "
          >

            <table
              width="100%"
              cellpadding="0"
              cellspacing="0"
              border="0"
              style="background:#f3f1eb;padding:45px 15px;"
            >
              <tr>
                <td align="center">

                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="
                      max-width:680px;
                      background:#faf9f5;
                      border:1px solid #dedad1;
                      border-radius:24px;
                      overflow:hidden;
                    "
                  >

                    <!-- TOP -->
                    <tr>
                      <td
                        style="
                          padding:42px 42px 35px;
                          background:#292621;
                        "
                      >
                        <div
                          style="
                            font-size:11px;
                            letter-spacing:3px;
                            text-transform:uppercase;
                            color:#bcb5a8;
                            margin-bottom:22px;
                          "
                        >
                          New Website Enquiry
                        </div>

                        <div
                          style="
                            font-size:34px;
                            line-height:1.1;
                            letter-spacing:-1px;
                            color:#ffffff;
                            font-weight:400;
                          "
                        >
                          ${escapeHtml(name)}
                          <br />
                          <span style="color:#c9bda8;">
                            wants to talk.
                          </span>
                        </div>
                      </td>
                    </tr>

                    <!-- INTRO -->
                    <tr>
                      <td style="padding:38px 42px 15px;">
                        <p
                          style="
                            margin:0;
                            font-size:14px;
                            line-height:1.7;
                            color:#777168;
                          "
                        >
                          A new enquiry has been submitted through your
                          portfolio website. Here are the project details.
                        </p>
                      </td>
                    </tr>

                    <!-- DETAILS -->
                    <tr>
                      <td style="padding:20px 42px 10px;">

                        <table
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                        >

                          <tr>
                            <td
                              style="
                                padding:18px 0;
                                border-bottom:1px solid #e2ded6;
                              "
                            >
                              <div
                                style="
                                  font-size:10px;
                                  text-transform:uppercase;
                                  letter-spacing:2px;
                                  color:#918a80;
                                  margin-bottom:7px;
                                "
                              >
                                Name
                              </div>

                              <div
                                style="
                                  font-size:16px;
                                  color:#292621;
                                "
                              >
                                ${escapeHtml(name)}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td
                              style="
                                padding:18px 0;
                                border-bottom:1px solid #e2ded6;
                              "
                            >
                              <div
                                style="
                                  font-size:10px;
                                  text-transform:uppercase;
                                  letter-spacing:2px;
                                  color:#918a80;
                                  margin-bottom:7px;
                                "
                              >
                                Email
                              </div>

                              <a
                                href="mailto:${escapeHtml(email)}"
                                style="
                                  font-size:16px;
                                  color:#292621;
                                  text-decoration:none;
                                "
                              >
                                ${escapeHtml(email)}
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td
                              style="
                                padding:18px 0;
                                border-bottom:1px solid #e2ded6;
                              "
                            >
                              <div
                                style="
                                  font-size:10px;
                                  text-transform:uppercase;
                                  letter-spacing:2px;
                                  color:#918a80;
                                  margin-bottom:7px;
                                "
                              >
                                Phone
                              </div>

                              <div
                                style="
                                  font-size:16px;
                                  color:#292621;
                                "
                              >
                                ${escapeHtml(phone || "Not provided")}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding:18px 0 25px;">
                              <div
                                style="
                                  font-size:10px;
                                  text-transform:uppercase;
                                  letter-spacing:2px;
                                  color:#918a80;
                                  margin-bottom:10px;
                                "
                              >
                                Service
                              </div>

                              <span
                                style="
                                  display:inline-block;
                                  background:#e9e3d8;
                                  border-radius:50px;
                                  padding:9px 15px;
                                  font-size:12px;
                                  color:#4c473f;
                                "
                              >
                                ${escapeHtml(service || "Not selected")}
                              </span>
                            </td>
                          </tr>

                        </table>

                      </td>
                    </tr>

                    <!-- MESSAGE -->
                    <tr>
                      <td style="padding:5px 42px 40px;">

                        <div
                          style="
                            background:#eeece6;
                            border:1px solid #ded9cf;
                            border-radius:18px;
                            padding:25px;
                          "
                        >

                          <div
                            style="
                              font-size:10px;
                              text-transform:uppercase;
                              letter-spacing:2px;
                              color:#918a80;
                              margin-bottom:14px;
                            "
                          >
                            Project Message
                          </div>

                          <div
                            style="
                              font-size:15px;
                              line-height:1.8;
                              color:#403c36;
                              white-space:pre-line;
                            "
                          >
                            ${escapeHtml(message)}
                          </div>

                        </div>

                      </td>
                    </tr>

                    <!-- FOOTER -->
                    <tr>
                      <td
                        style="
                          padding:25px 42px;
                          border-top:1px solid #dedad1;
                          background:#f5f3ed;
                        "
                      >

                        <table
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                        >
                          <tr>

                            <td>
                              <div
                                style="
                                  font-size:13px;
                                  color:#292621;
                                  font-weight:600;
                                "
                              >
                                Bin Zaheer
                              </div>

                              <div
                                style="
                                  margin-top:5px;
                                  font-size:11px;
                                  color:#8b857c;
                                "
                              >
                                Frontend Web Developer
                              </div>
                            </td>

                            <td align="right">
                              <div
                                style="
                                  font-size:10px;
                                  letter-spacing:2px;
                                  text-transform:uppercase;
                                  color:#999288;
                                "
                              >
                                Portfolio Enquiry
                              </div>
                            </td>

                          </tr>
                        </table>

                      </td>
                    </tr>

                  </table>

                </td>
              </tr>
            </table>

          </body>
        </html>
      `,
      });

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send email.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Your message has been sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}

/**
 * Prevent HTML injection inside the email.
 */
function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
