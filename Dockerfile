# استخدم نسخة خفيفة من Node.js لتقليل حجم الصورة
FROM node:18-slim

# إعداد المجلد الرئيسي داخل الحاوية
WORKDIR /app

# نسخ ملفات التعريف وتثبيت فقط ما تحتاجه
COPY package*.json ./
RUN npm install --production

# نسخ باقي الملفات
COPY . .

# تحديد المنفذ الذي يستمع عليه التطبيق (Cloud Run يستخدم PORT)
EXPOSE 8080

# الأمر الذي يشغّل التطبيق
CMD ["node", "index.js"]
