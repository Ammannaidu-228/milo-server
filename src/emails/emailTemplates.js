export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Milo</title>
    <!--[if mso]>
    <style type="text/css">
      body, table, td {font-family: Georgia, serif !important;}
    </style>
    <![endif]-->
  </head>
  <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #fff5f0 0%, #ffe8d9 100%); font-family: Georgia, serif;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: linear-gradient(135deg, #fff5f0 0%, #ffe8d9 100%); padding: 40px 20px;">
      <tr>
        <td align="center">
          <!-- Main Container -->
          <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(239, 119, 68, 0.15);">
            
            <!-- Header Section with Logo -->
            <tr>
              <td align="center" style="padding: 60px 40px 40px 40px; background: linear-gradient(135deg, #fb7185 0%, #f97316 100%);">
                <!--[if mso]>
                <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center">
                <![endif]-->
                <!-- Logo Container -->
                <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto 20px auto;">
                  <tr>
                    <td align="center">
                      <!-- Logo Icon -->
                      <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #fff 0%, #ffe8d9 100%); border-radius: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.15); margin: 0 auto 16px; padding: 16px;">
                        <svg width="48" height="48" viewBox="0 0 48 48" style="display: block;">
                          <circle cx="24" cy="24" r="20" fill="url(#gradient1)" opacity="0.2"/>
                          <path d="M24 8 C16 8 8 16 8 24 C8 28 10 32 13 35 L11 40 L17 37 C19 38 21 39 24 39 C32 39 40 32 40 24 C40 16 32 8 24 8 Z" fill="url(#gradient2)" stroke="#f97316" stroke-width="1.5" stroke-linejoin="round"/>
                          <circle cx="18" cy="22" r="2" fill="#fff"/>
                          <circle cx="30" cy="22" r="2" fill="#fff"/>
                          <path d="M18 28 Q24 32 30 28" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none"/>
                          <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style="stop-color:#fb7185"/>
                              <stop offset="100%" style="stop-color:#f97316"/>
                            </linearGradient>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style="stop-color:#fb7185"/>
                              <stop offset="100%" style="stop-color:#f97316"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <!-- Brand Name -->
                      <h1 style="margin: 0; color: #ffffff; font-size: 42px; font-weight: 400; letter-spacing: 0.5px; text-shadow: 0 2px 12px rgba(0,0,0,0.1); font-family: Georgia, serif;">Milo</h1>
                      <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.95); font-size: 15px; font-weight: 400; letter-spacing: 1px; text-transform: uppercase; font-family: Georgia, serif;">Moments In Let's Out</p>
                    </td>
                  </tr>
                </table>
                <!--[if mso]>
                </td></tr></table>
                <![endif]-->
              </td>
            </tr>
            
            <!-- Main Content -->
            <tr>
              <td style="padding: 50px 40px;">
                <h2 style="margin: 0 0 16px 0; color: #1f2937; font-size: 28px; font-weight: 400; font-family: Georgia, serif;">Hey ${name}! 👋</h2>
                <p style="margin: 0 0 24px 0; color: #4b5563; font-size: 16px; line-height: 1.7; font-family: Georgia, serif;">
                  We're thrilled to have you join our community! Your moments are waiting, and we can't wait to see you connect with friends and share the experiences that matter most.
                </p>
                
                <!-- Feature Cards -->
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 32px 0;">
                  <tr>
                    <td style="padding: 24px; background: linear-gradient(135deg, #fff5f0 0%, #ffe8d9 100%); border-radius: 16px; border-left: 4px solid #fb7185;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td width="50" valign="top">
                            <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #fb7185 0%, #f97316 100%); border-radius: 12px; text-align: center; line-height: 40px; box-shadow: 0 4px 12px rgba(251, 113, 133, 0.3);">
                              <span style="font-size: 20px;">❤️</span>
                            </div>
                          </td>
                          <td valign="top" style="padding-left: 16px;">
                            <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 18px; font-weight: 500; font-family: Georgia, serif;">Your Community Awaits</h3>
                            <p style="margin: 0; color: #6b7280; font-size: 15px; line-height: 1.6; font-family: Georgia, serif;">Reconnect with friends and discover moments from your circle</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr><td style="height: 16px;"></td></tr>
                  <tr>
                    <td style="padding: 24px; background: linear-gradient(135deg, #fff5f0 0%, #ffe8d9 100%); border-radius: 16px; border-left: 4px solid #f97316;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td width="50" valign="top">
                            <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #fb7185 0%, #f97316 100%); border-radius: 12px; text-align: center; line-height: 40px; box-shadow: 0 4px 12px rgba(251, 113, 133, 0.3);">
                              <span style="font-size: 20px;">🔒</span>
                            </div>
                          </td>
                          <td valign="top" style="padding-left: 16px;">
                            <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 18px; font-weight: 500; font-family: Georgia, serif;">Always Secure</h3>
                            <p style="margin: 0; color: #6b7280; font-size: 15px; line-height: 1.6; font-family: Georgia, serif;">Your data is protected with end-to-end encryption</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr><td style="height: 16px;"></td></tr>
                  <tr>
                    <td style="padding: 24px; background: linear-gradient(135deg, #fff5f0 0%, #ffe8d9 100%); border-radius: 16px; border-left: 4px solid #fb923c;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td width="50" valign="top">
                            <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #fb7185 0%, #f97316 100%); border-radius: 12px; text-align: center; line-height: 40px; box-shadow: 0 4px 12px rgba(251, 113, 133, 0.3);">
                              <span style="font-size: 20px;">✨</span>
                            </div>
                          </td>
                          <td valign="top" style="padding-left: 16px;">
                            <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 18px; font-weight: 500; font-family: Georgia, serif;">New Moments Daily</h3>
                            <p style="margin: 0; color: #6b7280; font-size: 15px; line-height: 1.6; font-family: Georgia, serif;">Discover fresh content from your circle every day</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                
                <!-- CTA Button -->
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 40px 0 32px 0;">
                  <tr>
                    <td align="center">
                      <!--[if mso]>
                      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${clientURL}" style="height:54px;v-text-anchor:middle;width:250px;" arcsize="50%" strokecolor="#fb7185" fillcolor="#fb7185">
                        <w:anchorlock/>
                        <center style="color:#ffffff;font-family:Georgia, serif;font-size:16px;font-weight:500;">Start Your Journey ❤️</center>
                      </v:roundrect>
                      <![endif]-->
                      <!--[if !mso]><!-->
                      <a href="${clientURL}" style="display: inline-block; padding: 18px 48px; background: linear-gradient(135deg, #fb7185 0%, #f97316 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 500; border-radius: 50px; box-shadow: 0 8px 24px rgba(251, 113, 133, 0.35); font-family: Georgia, serif;">
                        Start Your Journey ❤️
                      </a>
                      <!--<![endif]-->
                    </td>
                  </tr>
                </table>
                
                <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 15px; line-height: 1.7; font-family: Georgia, serif;">
                  Ready to share your first moment? Your community is waiting to connect with you.
                </p>
                
                <p style="margin: 32px 0 0 0; color: #1f2937; font-size: 15px; line-height: 1.7; font-family: Georgia, serif;">
                  <strong style="font-weight: 500;">Warm regards,</strong><br>
                  <span style="background: linear-gradient(135deg, #fb7185 0%, #f97316 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 500;">The Milo Team</span>
                </p>
              </td>
            </tr>
            
            <!-- Footer -->
            <tr>
              <td style="padding: 32px 40px; background: linear-gradient(135deg, #fff5f0 0%, #ffe8d9 100%); border-top: 1px solid #fcd9c7;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="center">
                      <p style="margin: 0 0 16px 0; color: #9ca3af; font-size: 13px; font-family: Georgia, serif;">
                        © 2025 Milo. All rights reserved.
                      </p>
                      <p style="margin: 0; font-size: 13px; font-family: Georgia, serif;">
                        <a href="#" style="color: #fb7185; text-decoration: none; margin: 0 12px;">Privacy Policy</a>
                        <span style="color: #d1d5db;">•</span>
                        <a href="#" style="color: #fb7185; text-decoration: none; margin: 0 12px;">Terms of Service</a>
                        <span style="color: #d1d5db;">•</span>
                        <a href="#" style="color: #fb7185; text-decoration: none; margin: 0 12px;">Contact Us</a>
                      </p>
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
  `;
}