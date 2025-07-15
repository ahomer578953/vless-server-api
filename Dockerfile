# استخدم صورة Node.js الرسمية
FROM node:18

# إنشاء مجلد داخل الحاوية
WORKDIR /app

# نسخ ملفات المشروع
COPY package*.json ./
RUN npm install

COPY . .

# تحديد المنفذ الذي يستمع إليه التطبيق
EXPOSE 3000

# الأمر لتشغيل التطبيق
CMD [ "node", "index.js" ]
