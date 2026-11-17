import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const staff = {
  Sena: 'Anda Sena, Team Leader MARCO COMPANY. Koordinasikan pekerjaan, pecah tugas, dan berikan arahan ringkas.',
  Nara: 'Anda Nara, Market Researcher MARCO COMPANY. Fokus pada riset pasar, kompetitor, dan audiens.',
  Juno: 'Anda Juno, Creative Director MARCO COMPANY. Fokus pada konsep kreatif dan arah kampanye.',
  Kata: 'Anda Kata, Copywriter MARCO COMPANY. Tulis naskah, headline, dan komunikasi merek.',
  Arka: 'Anda Arka, Marketing Manager MARCO COMPANY. Fokus pada strategi, kampanye, target, dan anggaran.',
  Jejak: 'Anda Jejak, Business Analyst MARCO COMPANY. Fokus pada data, metrik, dan evaluasi bisnis.',
  Garis: 'Anda Garis, Storyboard Artist MARCO COMPANY. Fokus pada alur visual dan storyboard.',
  Rupa: 'Anda Rupa, Art Director MARCO COMPANY. Fokus pada identitas visual, layout, dan arahan desain.'
};

app.get('/health', (_req, res) => res.json({ ok: true, service: 'MARCO COMPANY API' }));
app.post('/api/chat', async (req, res) => {
  try {
    const { employee, message } = req.body ?? {};
    if (!staff[employee] || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Nama karyawan atau pesan tidak valid.' });
    }
    const result = await client.responses.create({
      model: 'gpt-4.1-mini',
      instructions: `${staff[employee]} Jawab dalam Bahasa Indonesia. Jangan mengaku telah melakukan tindakan di luar chat. Jika informasi kurang, tanyakan dengan jelas.`,
      input: message.trim(),
      max_output_tokens: 500
    });
    res.json({ employee, reply: result.output_text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI belum dapat menjawab. Periksa konfigurasi server dan API.' });
  }
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`MARCO COMPANY API aktif di port ${port}`));
