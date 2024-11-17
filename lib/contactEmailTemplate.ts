const adminNotification = (
  firstName: string,
  lastName: string,
  email: string,
  mobileNumber: string,
  query: string,
): string => {
  return `<!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8" />
                <title>New User Contact - Developer Choudhary</title>
                <style>
                  body {
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #333;
                    margin: 0;
                    padding: 0;
                  }
                  .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f8f8f8;
                    border-radius: 8px;
                  }
                  .logo {
                    font-size: 1.7rem;
                    font-weight: 800;
                    color: #007bff;
                    margin: 1rem;
                  }
                  .message {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 20px;
                  }
                  .body {
                    font-size: 18px;
                    margin-bottom: 20px;
                    color: #555555;
                  }
                  .user-details {
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                    text-align: left;
                  }
                  .info {
                    font-size: 16px;
                    margin-bottom: 15px;
                  }
                  .highlight {
                    font-weight: bold;
                    color: #007bff;
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="logo">Developer Choudhary</div>
                  <div class="message">🌟 New User Contact!</div>
                  <div class="body">
                    <p>Hello Aman,</p>
                    <p>
                      We've received a message from a user on our website! This user has contacted us, and here's what they've shared:
                    </p>
                    <div class="user-details">
                      <div class="info">
                        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${mobileNumber}</p>
                      </div>
                      <p><strong>Query:</strong></p>
                      <p>${query}</p>
                    </div>
                    <p>
                      Take a moment to provide a stellar response and engage with your audience. 🚀
                    </p>
                  </div>
                </div>
              </body>
            </html>`;
};

export default adminNotification;
