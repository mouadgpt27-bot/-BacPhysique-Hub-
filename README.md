
---

## 🚀 الطريقة 1: النشر عبر GitHub Pages (الأسهل والأفضل)

### الخطوة 1: إنشاء حساب GitHub
1. ادخل إلى: https://github.com/signup
2. أنشئ حساباً مجانياً (بريد إلكتروني + كلمة مرور)
3. أكّد بريدك الإلكتروني

### الخطوة 2: إنشاء مستودع (Repository)
1. بعد تسجيل الدخول، اضغط على زر **"+"** أعلى يمين الصفحة
2. اختر **"New repository"**
3. في **Repository name** اكتب: `bac-physique-hub`
4. اختر **Public**
5. ✅ ضع علامة على **"Add a README file"**
6. اضغط **"Create repository"**

### الخطوة 3: رفع ملفات الموقع
1. في صفحة المستودع، اضغط **"Add file"** ← **"Upload files"**
2. اسحب الملفات الثلاثة (index.html, style.css, app.js)
   إلى منطقة الرفع
3. اكتب رسالة مثل: "رفع ملفات الموقع"
4. اضغط **"Commit changes"**

### الخطوة 4: تفعيل GitHub Pages
1. اذهب إلى **Settings** (الإعدادات) في المستودع
2. في القائمة الجانبية، اضغط على **"Pages"**
3. في **Source** اختر **"Deploy from a branch"**
4. في **Branch** اختر **"main"** ← **"/ (root)"**
5. اضغط **"Save"**
6. ⏳ انتظر 2-3 دقائق

### الخطوة 5: الحصول على الرابط
- رابط موقعك سيكون:
  **`https://اسم-حسابك.github.io/bac-physique-hub/`**
- مثال: `https://ahmed2025.github.io/bac-physique-hub/`
- شارك هذا الرابط مع أصدقائك! 🎉

---

## 🚀 الطريقة 2: النشر عبر Netlify (سريع جداً)

### الخطوات:
1. ادخل إلى: https://app.netlify.com/drop
2. **اسحب المجلد** الذي يحتوي على ملفاتك مباشرة
   إلى الصفحة
3. انتظر ثوانٍ... ✅ موقعك جاهز!
4. ستحصل على رابط مثل:
   `https://random-name-12345.netlify.app`
5. يمكنك تغيير الاسم:
   - اضغط "Site settings" ← "Change site name"
   - اكتب اسماً مثل: `bac-physique-2025`
   - الرابط الجديد: `https://bac-physique-2025.netlify.app`

---

## 🚀 الطريقة 3: النشر عبر Vercel

### الخطوات:
1. ادخل إلى: https://vercel.com/signup
2. سجل بحساب GitHub الخاص بك
3. اضغط **"Add New" ← "Project"**
4. اختر المستودع `bac-physique-hub`
5. اضغط **"Deploy"**
6. ✅ موقعك جاهز على رابط مثل:
   `https://bac-physique-hub.vercel.app`

---

## 📝 كيفية إضافة ملفات PDF خاصة بك

### لإضافة ملخصات وامتحانات:

1. أنشئ مجلد `pdfs` في مستودعك
2. ارفع ملفات PDF إلى هذا المجلد
3. في ملف `app.js`، غيّر الروابط:
   
   من: `pdfUrl: '#'`
   إلى: `pdfUrl: 'pdfs/nom-du-fichier.pdf'`

4. مثال:
```javascript
{
    title: 'الموجات الميكانيكية المتوالية',
    pdfUrl: 'pdfs/ondes-mecaniques.pdf',
    // ...
}
