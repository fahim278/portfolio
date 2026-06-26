# EmailJS Configuration Credentials

## 📧 Email Service Details

**Service:** Gmail  
**Connected Email:** fahimwazir671@gmail.com  
**Owner:** Fahim

---

## 🔑 API Credentials

### Service ID
```
service_jplx3sy
```

### Template ID
```
template_mcq15f8
```

### Public Key
```
-_oYHZ8t2hsolVl6X
```

### Private Key (Keep Secure - Never share publicly)
```
MCN8fjHY8NwfAgt97vbyy
```

---

## 📝 How to Use in Projects

### 1. Create `.env` file in project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=service_jplx3sy
VITE_APP_EMAILJS_TEMPLATE_ID=template_mcq15f8
VITE_APP_EMAILJS_PUBLIC_KEY=-_oYHZ8t2hsolVl6X
```

### 2. Install EmailJS Package:

```bash
npm install @emailjs/browser
```

### 3. Import and Use in Component:

```javascript
import emailjs from '@emailjs/browser';

emailjs.send(
  import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  {
    from_name: form.name,
    to_name: "Fahim",
    from_email: form.email,
    to_email: "fahimwazir671@gmail.com",
    message: form.message,
  },
  import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
)
```

---

## 📊 Account Limits

- **Free Tier:** 200 requests per month
- **Resets:** July 17
- **Daily Limit:** 500 emails per day

---

## 🔗 EmailJS Dashboard

https://dashboard.emailjs.com/

---

## ⚠️ Security Notes

1. Never commit `.env` file to GitHub (already in `.gitignore`)
2. Keep Private Key secure and never expose in frontend code
3. Only use Public Key in client-side applications
4. Regenerate keys if accidentally exposed

---

**Last Updated:** January 2025
