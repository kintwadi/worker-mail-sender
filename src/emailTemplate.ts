export const generateEmailTemplate = ({
  firstName,
  lastName,
  address,
  phoneNumber,
  postalCode,
  country,
  city
}: {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber?: string;
  postalCode?: string;
  country?: string;
  city?: string;
}) => {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
      <h2 style="color: #4CAF50;">Welcome to ShareHopes!</h2>
      <p>Here are your details:</p>
      <table style="border-collapse: collapse; width: 100%;">
        <tbody>
          <tr><td>First Name:</td><td>${firstName}</td></tr>
          <tr><td>Last Name:</td><td>${lastName}</td></tr>
          <tr><td>Address:</td><td>${address}</td></tr>
          <tr><td>Phone Number:</td><td>${phoneNumber || ''}</td></tr>
          <tr><td>Postal Code:</td><td>${postalCode || ''}</td></tr>
          <tr><td>Country:</td><td>${country || ''}</td></tr>
          <tr><td>City:</td><td>${city || ''}</td></tr>
        </tbody>
      </table>
      <p style="margin-top: 20px;">We’re excited to have you on board!</p>
    </div>
  `;
};