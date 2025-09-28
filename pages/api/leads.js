// pages/api/leads.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      role,
      companySize,
      currentChallenge,
      timeline,
      budget,
      additionalInfo,
      leadMagnet
    } = req.body;

    // Validate required fields
    if (!name || !email || !company || !role || !companySize || !currentChallenge || !timeline || !budget) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Send email to business
    const businessEmail = await resend.emails.send({
      from: 'updates@abercxo.com',
      to: ['amolpomane@gmail.com'],
      subject: `🚀 New Lead: ${name} from ${company} (Score: ${calculateLeadScore(req.body)}/25)`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 700px; margin: 0 auto; background: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #17B16F 0%, #10A85C 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">🚀 New Lead Alert</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">ABERCXO Lead Generation System</p>
          </div>

          <!-- Lead Score Badge -->
          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-left: 4px solid #17B16F;">
            <div style="display: inline-block; background: ${calculateLeadScore(req.body) >= 15 ? '#d4edda' : calculateLeadScore(req.body) >= 10 ? '#fff3cd' : '#f8d7da'}; padding: 12px 24px; border-radius: 25px; border: 2px solid ${calculateLeadScore(req.body) >= 15 ? '#17B16F' : calculateLeadScore(req.body) >= 10 ? '#ffc107' : '#dc3545'};">
              <span style="font-size: 24px; font-weight: bold; color: ${calculateLeadScore(req.body) >= 15 ? '#17B16F' : calculateLeadScore(req.body) >= 10 ? '#856404' : '#721c24'};">
                Lead Score: ${calculateLeadScore(req.body)}/25
              </span>
              <span style="margin-left: 8px; font-size: 14px; color: #666;">
                ${calculateLeadScore(req.body) >= 15 ? '🔥 HOT LEAD' : calculateLeadScore(req.body) >= 10 ? '⭐ WARM LEAD' : '❄️ COLD LEAD'}
              </span>
            </div>
          </div>

          <!-- Lead Information -->
          <div style="background: #f8f9fa; padding: 25px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #17B16F;">
            <h3 style="color: #333; margin-top: 0; font-size: 20px; display: flex; align-items: center;">
              👤 Lead Information
            </h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
              <div><strong>Name:</strong> ${name}</div>
              <div><strong>Email:</strong> <a href="mailto:${email}" style="color: #17B16F;">${email}</a></div>
              <div><strong>Phone:</strong> ${phone || 'Not provided'}</div>
              <div><strong>Company:</strong> ${company}</div>
              <div><strong>Role:</strong> ${role}</div>
              <div><strong>Company Size:</strong> ${companySize}</div>
            </div>
          </div>

          <!-- Growth Challenges -->
          <div style="background: #e8f5e8; padding: 25px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #28a745;">
            <h3 style="color: #333; margin-top: 0; font-size: 20px; display: flex; align-items: center;">
              🎯 Growth Challenges
            </h3>
            <div style="margin-top: 15px;">
              <p><strong>Primary Challenge:</strong> ${currentChallenge}</p>
              <p><strong>Timeline:</strong> ${timeline}</p>
              <p><strong>Budget Range:</strong> ${budget}</p>
              ${additionalInfo ? `<p><strong>Additional Info:</strong> ${additionalInfo}</p>` : ''}
            </div>
          </div>

          <!-- Lead Magnet & Context -->
          <div style="background: #fff3cd; padding: 25px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #ffc107;">
            <h3 style="color: #333; margin-top: 0; font-size: 20px; display: flex; align-items: center;">
              🎁 Lead Magnet & Context
            </h3>
            <div style="margin-top: 15px;">
              <p><strong>Requested Resource:</strong> ${leadMagnet}</p>
              <p><strong>Lead Quality:</strong> ${calculateLeadScore(req.body) >= 15 ? 'High Priority - Respond within 1 hour' : calculateLeadScore(req.body) >= 10 ? 'Medium Priority - Respond within 4 hours' : 'Low Priority - Respond within 24 hours'}</p>
              <p><strong>Recommended Action:</strong> ${calculateLeadScore(req.body) >= 15 ? 'Call immediately - Hot prospect' : calculateLeadScore(req.body) >= 10 ? 'Email first, then call' : 'Email with value-first approach'}</p>
            </div>
          </div>

          <!-- Quick Actions -->
          <div style="background: #ffffff; padding: 25px; margin: 20px 0; border-radius: 8px; border: 2px solid #e9ecef;">
            <h3 style="color: #333; margin-top: 0; font-size: 20px; display: flex; align-items: center;">
              ⚡ Quick Actions
            </h3>
            <div style="display: flex; gap: 15px; margin-top: 15px; flex-wrap: wrap;">
              <a href="mailto:${email}?subject=Re: Your Growth Strategy Session Request&body=Hi ${name},%0D%0A%0D%0AThank you for your interest in our growth strategy session. I'd love to help you accelerate your growth at ${company}.%0D%0A%0D%0ALet me know your availability for a 30-minute call this week.%0D%0A%0D%0ABest regards,%0D%0AAmol" 
                 style="background: #17B16F; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
                📧 Reply to Lead
              </a>
              <a href="tel:${phone || ''}" 
                 style="background: #6c757d; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
                📞 Call Lead
              </a>
              <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Call with ${name} - ${company}&dates=20241201T100000Z/20241201T110000Z&details=Lead from ABERCXO website" 
                 style="background: #007bff; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
                📅 Schedule Call
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 12px 12px; border-top: 1px solid #e9ecef;">
            <p style="color: #666; margin: 0; font-size: 14px;">
              This lead was generated from the ABERCXO website lead generation system.
            </p>
            <p style="color: #666; margin: 5px 0 0 0; font-size: 12px;">
              Generated at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        </div>
      `
    });

    // Send confirmation email to lead
    const confirmationEmail = await resend.emails.send({
      from: 'updates@abercxo.com',
      to: [email],
      subject: `Thank you for your interest - ${leadMagnet}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 700px; margin: 0 auto; background: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #17B16F 0%, #10A85C 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">🎉 Thank You, ${name}!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">Your growth journey starts now</p>
          </div>

          <!-- Main Content -->
          <div style="padding: 30px;">
            <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #17B16F;">
              <h2 style="color: #333; margin-top: 0; font-size: 22px;">We've received your request for our <strong>${leadMagnet}</strong></h2>
              <p style="color: #666; margin: 10px 0 0 0; font-size: 16px;">We're excited to help you accelerate your growth at <strong>${company}</strong> and break through any plateaus you're facing.</p>
            </div>

            <!-- What Happens Next -->
            <div style="background: #e8f5e8; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #28a745;">
              <h3 style="color: #333; margin-top: 0; font-size: 20px; display: flex; align-items: center;">
                ⚡ What Happens Next?
              </h3>
              <div style="margin-top: 15px;">
                <div style="display: flex; align-items: center; margin-bottom: 12px;">
                  <div style="background: #17B16F; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">1</div>
                  <span style="color: #333;">Our team will review your information within <strong>2 hours</strong></span>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 12px;">
                  <div style="background: #17B16F; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">2</div>
                  <span style="color: #333;">We'll send you a <strong>personalized growth strategy</strong> tailored to your challenges</span>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 12px;">
                  <div style="background: #17B16F; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">3</div>
                  <span style="color: #333;">We'll schedule your <strong>free consultation call</strong> with our fractional leadership experts</span>
                </div>
                <div style="display: flex; align-items: center;">
                  <div style="background: #17B16F; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">4</div>
                  <span style="color: #333;">You'll get access to our <strong>exclusive resources</strong> and frameworks</span>
                </div>
              </div>
            </div>

            <!-- Why Choose ABERCXO -->
            <div style="background: #fff3cd; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #ffc107;">
              <h3 style="color: #333; margin-top: 0; font-size: 20px; display: flex; align-items: center;">
                🚀 Why Choose ABERCXO?
              </h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                <div style="display: flex; align-items: center;">
                  <div style="background: #17B16F; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 10px;">✓</div>
                  <span style="color: #333; font-size: 14px;">20+ years of major brand expansion experience</span>
                </div>
                <div style="display: flex; align-items: center;">
                  <div style="background: #17B16F; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 10px;">✓</div>
                  <span style="color: #333; font-size: 14px;">Proven track record with 500+ companies</span>
                </div>
                <div style="display: flex; align-items: center;">
                  <div style="background: #17B16F; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 10px;">✓</div>
                  <span style="color: #333; font-size: 14px;">Fractional leadership without full-time costs</span>
                </div>
                <div style="display: flex; align-items: center;">
                  <div style="background: #17B16F; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 10px;">✓</div>
                  <span style="color: #333; font-size: 14px;">Start in 48 hours with immediate impact</span>
                </div>
              </div>
            </div>

            <!-- Success Stories -->
            <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #6c757d;">
              <h3 style="color: #333; margin-top: 0; font-size: 20px; display: flex; align-items: center;">
                💬 What Our Clients Say
              </h3>
              <div style="margin-top: 15px; font-style: italic; color: #666; font-size: 16px; line-height: 1.6;">
                "ABERCXO transformed our growth strategy completely. We went from struggling to scale to <strong>300% revenue growth in 12 months</strong>. The fractional leadership model is genius - we got world-class expertise without the full-time overhead."
              </div>
              <div style="margin-top: 10px; color: #333; font-weight: 600;">
                - Sarah Johnson, CEO, TechFlow
              </div>
            </div>

            <!-- CTA -->
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #666; margin-bottom: 20px; font-size: 16px;">Questions? Reply to this email or call us directly.</p>
              <div style="display: inline-block; background: linear-gradient(135deg, #17B16F 0%, #10A85C 100%); padding: 15px 30px; border-radius: 25px;">
                <p style="color: white; margin: 0; font-size: 18px; font-weight: bold;">Ready to change your trajectory? 🚀</p>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 12px 12px; border-top: 1px solid #e9ecef;">
            <p style="color: #666; margin: 0; font-size: 14px;">
              This email was sent from ABERCXO - Fractional Growth Leadership
            </p>
            <p style="color: #666; margin: 5px 0 0 0; font-size: 12px;">
              Sent at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        </div>
      `
    });

    // Store lead in database (optional - you can add your database logic here)
    // await storeLeadInDatabase(req.body);

    return res.status(200).json({ 
      message: 'Lead submitted successfully',
      businessEmailId: businessEmail.id,
      confirmationEmailId: confirmationEmail.id
    });

  } catch (error) {
    console.error('Lead submission error:', error);
    return res.status(500).json({ 
      message: 'Failed to submit lead',
      error: error.message 
    });
  }
}

// Lead scoring function
function calculateLeadScore(leadData) {
  let score = 0;
  
  // Company size scoring
  const companySizeScores = {
    '1-10 employees': 3,
    '11-50 employees': 5,
    '51-200 employees': 7,
    '201-1000 employees': 8,
    '1000+ employees': 9
  };
  score += companySizeScores[leadData.companySize] || 0;
  
  // Timeline scoring (urgency)
  const timelineScores = {
    'Immediate (within 30 days)': 10,
    '1-3 months': 7,
    '3-6 months': 5,
    '6+ months': 3
  };
  score += timelineScores[leadData.timeline] || 0;
  
  // Budget scoring
  if (leadData.budget.includes('₹100,000')) score += 8;
  else if (leadData.budget.includes('₹50,000')) score += 6;
  else if (leadData.budget.includes('Custom')) score += 7;
  else score += 4;
  
  // Challenge urgency
  const urgentChallenges = ['Need turnaround fast', 'Sales team struggling', 'Stuck in growth plateau'];
  if (urgentChallenges.includes(leadData.currentChallenge)) score += 5;
  
  // Additional info provided
  if (leadData.additionalInfo && leadData.additionalInfo.length > 50) score += 3;
  
  return Math.min(score, 25); // Cap at 25
}
