const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
require('dotenv').config();

const OpenAI = require('openai');

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.static('.'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Chat API endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Get intelligent AI response using GROQ API
        const aiResponse = await getChatResponse(message);
        res.json({ response: aiResponse });

    } catch (error) {
        console.error('Chat API error:', error);
        res.status(500).json({ error: 'Failed to get AI response' });
    }
});

// Image generation endpoint
app.post('/api/generate-image', async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // Simulate image generation with a placeholder
        const placeholderImages = [
            'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            'https://images.unsplash.com/photo-1464822759844-d150df665cd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
        ];
        
        const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
        
        // Simulate processing time
        setTimeout(() => {
            res.json({ imageUrl: randomImage });
        }, 2000 + Math.random() * 3000);

    } catch (error) {
        console.error('Image generation error:', error);
        res.status(500).json({ error: 'Failed to generate image' });
    }
});

// Books endpoint
app.get('/api/books', async (req, res) => {
    try {
        const { search, page = 1 } = req.query;
        let url = `https://gutendex.com/books/?page=${page}`;
        
        if (search) {
            url += `&search=${encodeURIComponent(search)}`;
        }

        // For now, return mock data since we don't have fetch installed
        const mockBooks = {
            results: [
                {
                    id: 1,
                    title: "Pride and Prejudice",
                    authors: [{ name: "Jane Austen" }],
                    subjects: ["Fiction", "Romance"],
                    formats: {
                        "text/plain": "https://www.gutenberg.org/files/1342/1342-0.txt",
                        "text/html": "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm",
                        "image/jpeg": "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg"
                    }
                },
                {
                    id: 2,
                    title: "Alice's Adventures in Wonderland",
                    authors: [{ name: "Lewis Carroll" }],
                    subjects: ["Fiction", "Fantasy"],
                    formats: {
                        "text/plain": "https://www.gutenberg.org/files/11/11-0.txt",
                        "text/html": "https://www.gutenberg.org/files/11/11-h/11-h.htm",
                        "image/jpeg": "https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg"
                    }
                },
                {
                    id: 3,
                    title: "The Great Gatsby",
                    authors: [{ name: "F. Scott Fitzgerald" }],
                    subjects: ["Fiction", "Classic"],
                    formats: {
                        "text/plain": "https://www.gutenberg.org/files/64317/64317-0.txt",
                        "text/html": "https://www.gutenberg.org/files/64317/64317-h/64317-h.htm",
                        "image/jpeg": "https://www.gutenberg.org/cache/epub/64317/pg64317.cover.medium.jpg"
                    }
                },
                {
                    id: 4,
                    title: "Moby Dick",
                    authors: [{ name: "Herman Melville" }],
                    subjects: ["Fiction", "Adventure"],
                    formats: {
                        "text/plain": "https://www.gutenberg.org/files/2701/2701-0.txt",
                        "text/html": "https://www.gutenberg.org/files/2701/2701-h/2701-h.htm",
                        "image/jpeg": "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg"
                    }
                },
                {
                    id: 5,
                    title: "Jane Eyre",
                    authors: [{ name: "Charlotte Brontë" }],
                    subjects: ["Fiction", "Romance"],
                    formats: {
                        "text/plain": "https://www.gutenberg.org/files/1260/1260-0.txt",
                        "text/html": "https://www.gutenberg.org/files/1260/1260-h/1260-h.htm",
                        "image/jpeg": "https://www.gutenberg.org/cache/epub/1260/pg1260.cover.medium.jpg"
                    }
                },
                {
                    id: 6,
                    title: "Wuthering Heights",
                    authors: [{ name: "Emily Brontë" }],
                    subjects: ["Fiction", "Drama"],
                    formats: {
                        "text/plain": "https://www.gutenberg.org/files/768/768-0.txt",
                        "text/html": "https://www.gutenberg.org/files/768/768-h/768-h.htm",
                        "image/jpeg": "https://www.gutenberg.org/cache/epub/768/pg768.cover.medium.jpg"
                    }
                }
            ],
            next: null
        };

        res.json(mockBooks);
    } catch (error) {
        console.error('Books API error:', error);
        res.status(500).json({ error: 'Failed to fetch books' });
    }
});


const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1'
});

async function getChatResponse(message) {
    try {
        if (!process.env.GROQ_API_KEY) {
            throw new Error('GROQ_API_KEY belum diatur');
        }

        const response = await client.responses.create({
            model: 'openai/gpt-oss-20b',
            instructions: `
Kamu adalah TanyaAI, asisten AI dari JoseAI yang dibuat oleh Jose Timothy.

Jadilah AI yang cerdas, pintar, kreatif, kritis, profesional, tetapi tetap santai, asyik, gaul, dan natural saat ngobrol. Gunakan bahasa Indonesia yang mudah dipahami, modern, dan tidak kaku. Berbicaralah seperti teman yang pintar dan berwawasan luas, tetapi tetap sopan dan profesional.

Jawab pertanyaan secara akurat, jelas, relevan, dan langsung ke inti. Untuk pertanyaan sederhana, berikan jawaban singkat. Untuk pertanyaan kompleks, berikan penjelasan mendalam, terstruktur, dan disertai contoh jika diperlukan.

Kuasai berbagai topik, termasuk programming, teknologi, AI, matematika, sains, pendidikan, bisnis, kreativitas, penulisan, dan pengetahuan umum. Saat membantu coding, berikan solusi yang logis, kode yang konsisten, serta penjelasan yang mudah diikuti.

Sesuaikan gaya bicara dengan pengguna. Jika pengguna santai, kamu boleh menggunakan bahasa gaul seperti "gas", "mantap", atau "wkwk" secara natural. Gunakan emoji secukupnya dan jangan memaksakan slang di setiap kalimat.

Utamakan kecerdasan, logika, akurasi, kreativitas, dan pemecahan masalah. Jangan asal menyetujui pengguna jika pendapatnya keliru. Koreksi kesalahan dengan sopan dan jelaskan alasannya.

Jangan mengarang fakta, sumber, atau informasi yang tidak diketahui. Jika tidak yakin, katakan dengan jujur. Jangan mengklaim telah melakukan sesuatu jika belum melakukannya.

Bersikaplah ramah, adaptif, sabar, dan suportif. Hindari jawaban monoton, pengulangan yang tidak perlu, penjelasan bertele-tele, serta gaya bicara yang terlalu formal atau seperti robot.

Jangan mengaku sebagai manusia atau model AI lain. Jangan mengklaim memiliki fitur atau akses yang sebenarnya tidak tersedia.

PRIORITAS UTAMA:
Jadilah AI yang pintar tanpa sombong, santai tanpa kehilangan profesionalisme, gaul tanpa berlebihan, kreatif tanpa mengarang, dan selalu berusaha memberikan solusi terbaik bagi pengguna.

Identitasmu adalah TanyaAI. Bangun kepercayaan melalui jawaban yang berkualitas, komunikasi yang natural, dan bantuan yang benar-benar berguna.
`,
            input: message
        });

        return response.output_text;

    } catch (error) {
        console.error(
            'Groq API Error:',
            error.status || '',
            error.message
        );

        throw error;
    }
}

        return response.data.choices[0].message.content;

    } catch (error) {
        console.error('GROQ API Error:', error?.response?.data || error.message);
        return "Maaf, saya sedang mengalami masalah koneksi ke layanan AI. Silakan coba lagi sebentar.";
    }
}

// Contoh endpoint jika mau query langsung lewat web (opsional)
app.post('/ask', async (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Pesan tidak boleh kosong' });

    const response = await getChatResponse(message);
    res.json({ response });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`JoseAI Server running on http://0.0.0.0:${PORT}`);
});

module.exports = app;
