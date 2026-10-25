import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Privacy Policy | DevOnionX",
  description:
    "Learn how DevOnionX collects, uses, stores, and protects personal information when you visit our website or contact our team.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const LAST_UPDATED = "October 25, 2026";

// Banglish note: ekই para r line gulo majhe blank line chhara likha, tai parser oigulo ek <p> te join kore
const CONTENT = `
## 01. Introduction

At **DevOnionX**, we respect your privacy and aim to handle personal information responsibly.
This Privacy Policy explains how we collect, use, store, and protect information when you visit [our website](https://www.devonionx.com), contact our team, submit a project inquiry, or communicate with us about our services.
DevOnionX is based in Kobirpur, Savar, Dhaka, Bangladesh, and provides web development and technology services to businesses, organizations, and clients.

This policy should be read alongside our [Terms of Service](/terms-of-service) and any applicable project-specific agreement.

## 02. Information We Collect

The information we collect depends on how you interact with our website and services.

### Information you provide

This may include:

- Your name, email address, and phone number.
- Your company or organization name.
- Project requirements and business information you choose to share.
- Messages, questions, and other information submitted through contact forms or business communications.

Please provide only information relevant to your inquiry. Do not submit passwords, payment card details, government identification numbers, API keys, or other sensitive credentials through public website forms.

### Technical information

When you visit our website, our hosting infrastructure or security systems may process basic technical information, such as:

- IP address and request information.
- Browser, device, and operating system details.
- Pages requested and referring website information.
- Visit timestamps and diagnostic or security logs.

The information actually collected depends on the website features and services in use.

## 03. How We Use Your Information

We may use information for the following purposes:

- **Responding to inquiries:** Answer questions and communicate with prospective or existing clients.
- **Project planning:** Understand requirements and prepare proposals or estimates.
- **Service delivery:** Coordinate agreed development, testing, deployment, and support work.
- **Website operations:** Maintain functionality, diagnose errors, and improve performance.
- **Security:** Detect spam, unauthorized access, misuse, and potential security incidents.
- **Business records:** Maintain relevant communications and contractual records.
- **Legal obligations:** Comply with applicable laws and respond to lawful requests where required.

We aim to use personal information only for relevant purposes and handle it in accordance with applicable legal requirements.

## 04. Contact Forms and Business Communication

When you contact DevOnionX, we use the information you provide to understand and respond to your message.
This may include reviewing your project requirements, discussing potential services, preparing a proposal, or maintaining records of business communication.
Submitting an inquiry does not automatically create a client relationship or guarantee that we will accept a project.

Please ensure that you are authorized to share any information about another person or organization. Avoid sending confidential credentials or unnecessary sensitive information through ordinary contact forms or email.
We do not intend to use information submitted through project inquiries for unrelated purposes. Any separate marketing communications will be handled according to applicable law and any consent requirements.

## 05. Cookies and Website Analytics

Our website or its service providers may use cookies or similar technologies to support essential functionality, security, performance, or analytics, where these features are implemented.
Cookies are small files that may be stored on your device when you visit a website.

You can manage or disable cookies through your browser settings. Some website features may not function properly if certain cookies are disabled.
Where applicable law requires consent for non-essential cookies or tracking technologies, we will follow the relevant consent requirements.
If analytics or additional tracking tools are introduced, this policy should be updated to accurately describe the services in use and their data practices.

## 06. Third-Party Services and Data Sharing

DevOnionX may rely on external service providers to operate its website and communicate with clients. Depending on the services actually used, these may include hosting and deployment platforms, email providers, cloud infrastructure, or project collaboration tools.
Information may be processed by these providers when reasonably necessary to operate the website, respond to inquiries, or deliver agreed services.
We aim to limit information sharing to what is reasonably necessary for the relevant purpose. Providers may process information under their own terms and privacy policies or under applicable service agreements.

We may also disclose information where required by law, to respond to lawful requests, or to protect rights and security as permitted by applicable law.
We do not sell personal information as a business practice.
Third-party websites linked from our website operate under their own privacy policies. We do not control the privacy practices of independent services.

## 07. Data Storage, Security, and Retention

We take reasonable technical and organizational measures to protect personal information against unauthorized access, disclosure, alteration, loss, or misuse.
Depending on the information and systems involved, these measures may include access restrictions, account security, confidentiality practices, and appropriate protection of stored information.
No website, electronic communication, or storage system can be guaranteed to be completely secure.

We retain personal information only for as long as reasonably necessary for the purposes described in this policy, unless a longer period is required or permitted by law.
Retention may depend on the nature of an inquiry, an ongoing client relationship, contractual obligations, business records, security needs, or legal requirements.
When information is no longer needed and there is no applicable reason to retain it, we take reasonable steps to delete it or otherwise dispose of it appropriately.

## 08. International Processing

DevOnionX operates from Bangladesh. Depending on the hosting platform, communication tools, or other service providers used, personal information may be processed or stored outside Bangladesh.
Where international processing occurs, we will take appropriate steps to handle the information in accordance with applicable legal requirements and relevant contractual obligations.
The countries involved and available safeguards may depend on the specific services used for the website or project.

## 09. Your Privacy Rights

Depending on applicable law and your circumstances, you may have the right to:

- Request access to personal information we hold about you.
- Ask us to correct inaccurate or incomplete information.
- Request deletion of information where legally permitted.
- Withdraw consent where processing is based on consent.
- Object to certain processing or ask questions about how information is handled.
- Submit a privacy complaint to an appropriate authority where applicable.

### How to make a request

Contact us using the details in the Contact Information section and explain your request.
We may need reasonable information to verify your identity and locate the relevant records. We will review and respond to requests in accordance with applicable legal requirements.
Some information may need to be retained where required by law or where another lawful basis applies. If we cannot fulfil a request, we will explain the position where legally permitted.

## 10. Children's Privacy

Our website and professional development services are intended for people and organizations seeking technology services. The website is not specifically directed at children.
We do not knowingly collect children's personal information in circumstances where doing so is prohibited by applicable law.
If you believe a child has provided personal information to us inappropriately, please contact us so we can review the situation and take appropriate action.

## 11. Changes to This Policy

We may update this Privacy Policy when our website, services, data practices, or applicable legal requirements change.
When we make changes, we will update the date shown at the top of this page. Where required by law, we will provide additional notice or obtain consent for relevant changes.
We encourage visitors and clients to review this page periodically.

## 12. Contact Information

If you have questions about this Privacy Policy or want to make a privacy-related request, please contact us.

**DevOnionX**

- Website: [https://www.devonionx.com](https://www.devonionx.com)
- Email: [devonionx@gmail.com](mailto:devonionx@gmail.com)
- Phone / WhatsApp: +8801566068310
- Business location: Kobirpur, Savar, Dhaka, Bangladesh
- Representative: Al Mahmud, CEO

We will review privacy inquiries and respond in accordance with applicable requirements.
This Privacy Policy should be read alongside our [Terms of Service](/terms-of-service) and any applicable privacy or data-processing terms agreed for a specific project.
`;

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      badge="Data & Privacy"
      title="Privacy Policy"
      description="How DevOnionX collects, uses, stores, and protects information when you visit our website, send a project inquiry, or work with us on web development and technology services."
      updated={LAST_UPDATED}
      content={CONTENT}
    />
  );
}
