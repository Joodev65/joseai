const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
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

// Start server
// Enhanced AI using GROQ API with Llama model
async function getChatResponse(message) {
    try {
        // Ambil API key dari Pastebin
        const axios = require('axios')
        const apiKeyResponse = await axios.get('https://pastebin.com/raw/fweddm6y');
        const groqApiKey = apiKeyResponse.data.trim();

        if (!groqApiKey) {
            return "Halo! Saya TanyaAI. Saya memerlukan GROQ API key untuk memberikan respons. Pastikan link API key tersedia!";
        }

        const payload = {
            model: 'llama-3.1-8b-instant',
            messages: [
                {
                    role: 'system',
                    content: `Kamu adalah TanyaAI, asisten AI yang cerdas dan membantu yang dibuat oleh Jose Timothy. Kamu terintegrasi dalam website JoseAI.

Karakteristik utama:
- Selalu jawab dalam bahasa Indonesia yang natural dan lancar
- Jadilah cerdas, membantu, dan conversational seperti ChatGPT, Claude, dan Gemini
- Berikan respons yang detail, akurat, dan thoughtful
- Jadilah kreatif dan engaging dalam percakapan
- Bantu dengan berbagai topik termasuk coding, writing, analysis, matematika, sains, dan pengetahuan umum
- Jadilah ramah tapi tetap profesional
- Kalau memungkinkan, sebutkan bahwa kamu bagian dari platform JoseAI yang dibuat Jose Timothy
- Selalu berusaha sebaik AI assistant terbaik

Responlah secara natural dan cerdas terhadap pertanyaan dan permintaan user dalam bahasa Indonesia.`
                },
                {
                    role: 'user',
                    content: message
                }
            ],
            temperature: 0.7,
            max_tokens: 1000,
            top_p: 1,
            stream: false
        };

        // Kirim request ke API GROQ
        const response = await axios.post(
            'https://api.groq.com/openai/v1/chat/completions',
            payload,
            {
                headers: {
                    'Authorization': `Bearer ${groqApiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

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
