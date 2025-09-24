<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>7oocode API</title>
    <link rel="icon" href="https://github.com/Joodev65.png" type="image/png">
    <meta name="description" content="7oocode API - Your Ultimate API Collection">
    <meta name="theme-color" content="#007bff">
    <style>
        /* Reset and Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans', Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%);
            color: #e5e7eb;
            min-height: 100vh;
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Header Styles */
        .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            z-index: 1000;
            padding: 0 1rem;
            height: 60px;
        }

        .header-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            max-width: 1200px;
            margin: 0 auto;
        }

        .menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            cursor: pointer;
            z-index: 1001;
            transition: all 0.3s ease;
            color: #e5e7eb;
        }

        .menu-toggle:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(59, 130, 246, 0.5);
        }

        .menu-toggle.active {
            background: rgba(59, 130, 246, 0.2);
            border-color: #3b82f6;
            color: #3b82f6;
        }

        .logo {
            font-size: 1.25rem;
            font-weight: 600;
            color: #ffffff;
            text-align: center;
            flex: 1;
            letter-spacing: -0.025em;
        }

        .profile-img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid rgba(255, 255, 255, 0.1);
            transition: border-color 0.3s ease;
        }

        .profile-img:hover {
            border-color: #3b82f6;
        }

        .profile-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Sidebar Styles */
        .sidebar {
            position: fixed;
            left: -320px;
            top: 0;
            width: 320px;
            height: 100vh;
            background: rgba(15, 15, 15, 0.98);
            backdrop-filter: blur(20px);
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 999;
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
        }

        .sidebar.active {
            left: 0;
        }

        .sidebar::-webkit-scrollbar {
            width: 6px;
        }

        .sidebar::-webkit-scrollbar-track {
            background: transparent;
        }

        .sidebar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
        }

        .sidebar-header {
            padding: 1.5rem 1.25rem;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar-logo {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            margin-bottom: 0.75rem;
            border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar-header h2 {
            font-size: 1.125rem;
            color: #ffffff;
            font-weight: 600;
            letter-spacing: -0.025em;
        }

        .nav-menu {
            list-style: none;
            padding: 0.75rem 0;
        }

        .nav-item {
            margin-bottom: 0.25rem;
        }

        .nav-link {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.875rem 1.25rem;
            color: #9ca3af;
            text-decoration: none;
            transition: all 0.3s ease;
            border-left: 3px solid transparent;
            font-size: 0.875rem;
            font-weight: 500;
        }

        .nav-link:hover,
        .nav-link.active {
            background: rgba(59, 130, 246, 0.1);
            color: #ffffff;
            border-left-color: #3b82f6;
        }

        .nav-icon {
            flex-shrink: 0;
            color: inherit;
            width: 20px;
            height: 20px;
        }

        .arrow {
            margin-left: auto;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            flex-shrink: 0;
            color: #6b7280;
            width: 16px;
            height: 16px;
        }

        .has-submenu.active .arrow {
            transform: rotate(180deg);
            color: #3b82f6;
        }

        .submenu {
            list-style: none;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            background: rgba(0, 0, 0, 0.3);
        }

        .has-submenu.active .submenu {
            max-height: 400px;
        }

        .submenu li {
            border-left: 1px solid rgba(255, 255, 255, 0.05);
            margin-left: 1.25rem;
        }

        .submenu a {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1rem;
            color: #9ca3af;
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 0.8125rem;
        }

        .submenu a:hover {
            background: rgba(59, 130, 246, 0.08);
            color: #e5e7eb;
            padding-left: 1.5rem;
        }

        .submenu-bullet {
            color: #3b82f6;
            font-size: 0.75rem;
        }

        /* Main Content */
        .main-content {
            margin-top: 60px;
            padding: 1.5rem 1rem;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Status Section */
        .status-section {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .status-card {
            background: rgba(31, 41, 55, 0.6);
            border-radius: 16px;
            padding: 1.25rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            align-items: center;
            gap: 1rem;
            animation: fadeIn 0.6s ease-out;
        }

        .status-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1);
            border-color: rgba(59, 130, 246, 0.3);
        }

        .status-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: rgba(59, 130, 246, 0.1);
            border-radius: 12px;
            border: 1px solid rgba(59, 130, 246, 0.2);
            color: #3b82f6;
            flex-shrink: 0;
        }

        .status-info {
            flex: 1;
        }

        .status-info h3 {
            font-size: 0.875rem;
            margin-bottom: 0.25rem;
            color: #ffffff;
            font-weight: 600;
        }

        .status-badge {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
            border: 1px solid;
        }

        .status-badge.active {
            background: rgba(34, 197, 94, 0.1);
            color: #22c55e;
            border-color: rgba(34, 197, 94, 0.2);
        }

        .status-badge.charging {
            background: rgba(251, 191, 36, 0.1);
            color: #fbbf24;
            border-color: rgba(251, 191, 36, 0.2);
        }

        .status-badge.low {
            background: rgba(239, 68, 68, 0.1);
            color: #ef4444;
            border-color: rgba(239, 68, 68, 0.2);
        }

        .status-text {
            color: #3b82f6;
            font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace;
            font-weight: 600;
            font-size: 0.875rem;
        }

        /* API Section */
        .api-section {
            margin-bottom: 2rem;
        }

        .section-title {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
            color: #ffffff;
            text-align: left;
            font-weight: 600;
            letter-spacing: -0.025em;
        }

        .api-links {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0.75rem;
        }

        .api-link {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: rgba(31, 41, 55, 0.6);
            border-radius: 12px;
            color: #ffffff;
            text-decoration: none;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(20px);
            font-size: 0.875rem;
            font-weight: 500;
            animation: fadeIn 0.6s ease-out;
        }

        .api-link:hover {
            background: rgba(59, 130, 246, 0.1);
            border-color: rgba(59, 130, 246, 0.3);
            transform: translateY(-1px);
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
        }

        .api-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: rgba(59, 130, 246, 0.1);
            border-radius: 10px;
            border: 1px solid rgba(59, 130, 246, 0.2);
            color: #3b82f6;
            flex-shrink: 0;
        }

        .contact .api-icon {
            background: rgba(34, 197, 94, 0.1);
            border-color: rgba(34, 197, 94, 0.2);
            color: #22c55e;
        }

        .donate .api-icon {
            background: rgba(251, 191, 36, 0.1);
            border-color: rgba(251, 191, 36, 0.2);
            color: #fbbf24;
        }

        /* Footer */
        .footer {
            text-align: center;
            padding: 2rem 0 1rem;
            color: #6b7280;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            margin-top: 2rem;
            font-size: 0.875rem;
        }

        /* Overlay */
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            z-index: 998;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .overlay.active {
            opacity: 1;
            visibility: visible;
        }

        /* Animation Keyframes */
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }

        .ripple {
            animation: ripple 0.6s ease-out;
        }

        /* Responsive Design */
        @media (min-width: 640px) {
            .status-section {
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            }
            
            .api-links {
                grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            }
            
            .main-content {
                padding: 2rem 1.5rem;
            }
        }

        @media (min-width: 768px) {
            .main-content {
                padding: 2rem 2rem;
            }
            
            .logo {
                font-size: 1.375rem;
            }
        }

        @media (min-width: 1024px) {
            .sidebar {
                left: 0;
                position: relative;
                width: 280px;
            }
            
            .main-content {
                margin-left: 280px;
                margin-top: 0;
                padding: 2rem 3rem;
            }
            
            .header {
                left: 280px;
            }
            
            .menu-toggle {
                display: none;
            }
            
            .overlay {
                display: none;
            }
        }

        /* Focus styles for accessibility */
        .nav-link:focus,
        .api-link:focus,
        .menu-toggle:focus {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
        }

        /* Custom selection color */
        ::selection {
            background: rgba(59, 130, 246, 0.2);
            color: #ffffff;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-content">
            <button class="menu-toggle" id="menuToggle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
            <h1 class="logo">7oocode API</h1>
            <div class="profile-img">
                <img src="https://github.com/Joodev65.png" alt="Profile">
            </div>
        </div>
    </header>

    <!-- Side Navigation -->
    <nav class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <img src="https://github.com/Joodev65.png" alt="7oocode" class="sidebar-logo">
            <h2>7oocode API</h2>
        </div>
        
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#dashboard" class="nav-link active">
                    <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    Dashboard
                </a>
            </li>
            
            <li class="nav-item has-submenu">
                <a href="#" class="nav-link submenu-toggle">
                    <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15V19C21 19.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V15" stroke="currentColor" stroke-width="2"/>
                        <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2"/>
                        <path d="M12 15V3" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    Downloader
                    <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </a>
                <ul class="submenu">
                    <li><a href="https://7oocode.vercel.app/api/tiktok" target="_blank">
                        <span class="submenu-bullet">○</span> TikTok
                    </a></li>
                    <li><a href="https://7oocode.vercel.app/api/instagram" target="_blank">
                        <span class="submenu-bullet">○</span> Instagram
                    </a></li>
                    <li><a href="https://7oocode.vercel.app/api/ytmp4" target="_blank">
                        <span class="submenu-bullet">○</span> YouTube MP4
                    </a></li>
                    <li><a href="https://7oocode.vercel.app/api/ytmp3" target="_blank">
                        <span class="submenu-bullet">○</span> YouTube MP3
                    </a></li>
                    <li><a href="https://7oocode.vercel.app/api/facebook" target="_blank">
                        <span class="submenu-bullet">○</span> Facebook
                    </a></li>
                </ul>
            </li>
            
            <li class="nav-item has-submenu">
                <a href="#" class="nav-link submenu-toggle">
                    <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    Open AI
                    <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </a>
                <ul class="submenu">
                    <li><a href="https://7oocode.vercel.app/api/gemini" target="_blank">
                        <span class="submenu-bullet">○</span> Gemini
                    </a></li>
                    <li><a href="https://7oocode.vercel.app/api/chatgpt" target="_blank">
                        <span class="submenu-bullet">○</span> ChatGPT
                    </a></li>
                    <li><a href="https://7oocode.vercel.app/api/kimi" target="_blank">
                        <span class="submenu-bullet">○</span> Kimi AI
                    </a></li>
                </ul>
            </li>
            
            <li class="nav-item has-submenu">
                <a href="#" class="nav-link submenu-toggle">
                    <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M14.7 6.3C15.9928 4.4596 17.8432 3.08568 19.9542 2.457C20.4751 2.30125 21.0336 2.30834 21.5502 2.47744C22.0668 2.64654 22.5157 2.96924 22.8273 3.39782C23.1389 3.8264 23.296 4.33311 23.2769 4.8488C23.2578 5.36449 23.0636 5.85901 22.722 6.264L17.845 11.72L16.08 9.955L14.7 6.3Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M11.7 14.28C11.332 14.648 10.888 14.9344 10.395 15.118C9.902 15.3016 9.37267 15.3776 8.84733 15.3407C8.322 15.3038 7.8122 15.1549 7.35733 14.905C6.90247 14.6552 6.51667 14.3113 6.23 13.9L2 10L4.83 6.83L8.93 11.06C9.34133 11.348 9.68467 11.7327 9.935 12.188C10.1853 12.6433 10.3342 13.153 10.3711 13.6783C10.408 14.2037 10.332 14.733 10.148 15.226C9.96404 15.719 9.67767 16.163 9.31 16.531L11.7 14.28ZM11.7 14.28L16.08 9.955" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    Tools
                    <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </a>
                <ul class="submenu">
                    <li><a href="https://7oocode.vercel.app/api/ssweb" target="_blank">
                        <span class="submenu-bullet">○</span> Screenshot Web
                    </a></li>
                    <li><a href="https://7oocode.vercel.app/api/spam" target="_blank">
                        <span class="submenu-bullet">○</span> Spam NGL
                    </a></li>
                    <li><a href="https://7oocode.vercel.app/api/removebg" target="_blank">
                        <span class="submenu-bullet">○</span> Remove Background
                    </a></li>
                </ul>
            </li>
            
            <li class="nav-item">
                <a href="https://7oocode.vercel.app/api/brat" target="_blank" class="nav-link">
                    <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                        <circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="2"/>
                        <path d="M21 15L16 10L5 21" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    Brat Generator
                </a>
            </li>
        </ul>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Status Cards -->
        <section class="status-section">
            <div class="status-card">
                <div class="status-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M2 12H22" stroke="currentColor" stroke-width="2"/>
                        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </div>
                <div class="status-info">
                    <h3>Status Server</h3>
                    <span class="status-badge active">● Active</span>
                </div>
            </div>

            <div class="status-card">
                <div class="status-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="6" width="18" height="12" rx="2" stroke="currentColor" stroke-width="2"/>
                        <path d="M22 10V14" stroke="currentColor" stroke-width="2"/>
                        <rect x="4" y="8" width="12" height="8" rx="1" fill="currentColor"/>
                    </svg>
                </div>
                <div class="status-info">
                    <h3>Battery Status</h3>
                    <span class="status-badge" id="batteryStatus">Getting...</span>
                </div>
            </div>

            <div class="status-card">
                <div class="status-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M2 12H22" stroke="currentColor" stroke-width="2"/>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </div>
                <div class="status-info">
                    <h3>IP Address</h3>
                    <span class="status-text" id="ipAddress">Loading...</span>
                </div>
            </div>
        </section>

        <!-- API Information Section -->
        <section class="api-section">
            <h2 class="section-title">Website Service</h2>
            
            <div class="api-links">
                <a href="https://t.me/Jcodeest4rdi" target="_blank" class="api-link contact">
                    <div class="api-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M21 15V19C21 19.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V15" stroke="currentColor" stroke-width="2"/>
                            <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2"/>
                            <path d="M12 15V3" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                    <div>
                        <h4>Contact Developer</h4>
                        <p style="font-size: 0.75rem; color: #9ca3af;">Get support and updates</p>
                    </div>
                </a>
                
                <a href="https://example.com" target="_blank" class="api-link donate">
                    <div class="api-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61V4.61Z" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                    <div>
                        <h4>Donasi</h4>
                        <p style="font-size: 0.75rem; color: #9ca3af;">Support our development</p>
                    </div>
                </a>
            </div>
        </section>
    </main>

    <!-- Overlay -->
    <div class="overlay" id="overlay"></div>

    <!-- Footer -->
    <footer class="footer">
        <p>&copy; 2025 7oocode API. All rights reserved.</p>
    </footer>

    <script>
        // Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Submenu Toggle
        const submenuToggles = document.querySelectorAll('.submenu-toggle');
        submenuToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const parent = toggle.parentElement;
                parent.classList.toggle('active');
            });
        });

        // Battery Status
        async function updateBatteryStatus() {
            try {
                if ('getBattery' in navigator) {
                    const battery = await navigator.getBattery();
                    
                    function updateBattery() {
                        const level = Math.round(battery.level * 100);
                        const statusElement = document.getElementById('batteryStatus');
                        
                        statusElement.textContent = `${level}% ${battery.charging ? '(Charging)' : ''}`;
                        
                        if (battery.charging) {
                            statusElement.className = 'status-badge charging';
                        } else if (level <= 20) {
                            statusElement.className = 'status-badge low';
                        } else {
                            statusElement.className = 'status-badge active';
                        }
                    }
                    
                    updateBattery();
                    battery.addEventListener('levelchange', updateBattery);
                    battery.addEventListener('chargingchange', updateBattery);
                } else {
                    document.getElementById('batteryStatus').textContent = 'Not available';
                }
            } catch (error) {
                document.getElementById('batteryStatus').textContent = 'Error';
            }
        }

        // IP Address
        async function updateIPAddress() {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                document.getElementById('ipAddress').textContent = data.ip;
            } catch (error) {
                document.getElementById('ipAddress').textContent = 'Unable to load';
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            updateBatteryStatus();
            updateIPAddress();
        });

        // Nav Link Active State
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    </script>
</body>
</html>
