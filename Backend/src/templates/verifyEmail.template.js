export const verifyEmailTemplate = () => `
<!DOCTYPE html>
<html>
<body style="margin:0; padding:0; background-color:#030712; font-family:Arial, sans-serif;">
    
    <div style="min-height:100vh; display:flex; align-items:center; justify-content:center;">
        
        <div style="background-color:#111827; border:1px solid #374151; border-radius:16px; padding:40px; max-width:400px; width:100%; text-align:center;">
            
            <div style="font-size:60px;">✅</div>
            
            <h1 style="color:#ffffff; font-size:24px; margin:16px 0 8px;">
                Email Verified Successfully!
            </h1>
            
            <p style="color:#9ca3af; font-size:14px; margin-bottom:24px;">
                Your email has been verified. You can now log in to your account.
            </p>
            
            <a href="http://localhost:5173/login" 
               style="background-color:#3b82f6; color:#ffffff; padding:12px 32px; border-radius:8px; text-decoration:none; font-size:14px; font-weight:bold;">
                Go to Login
            </a>
            
        </div>
    </div>

</body>
</html>
`