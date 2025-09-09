# EAVI Admission & Bursary System

A web-based system for generating admission and bursary letters for East Africa Vision Institute (EAVI).

## 🎯 Features

- **Campus Selection**: West Campus and Town Campus support
- **Student Management**: Add, view, edit, and delete student records
- **Letter Generation**: Automatic admission and bursary letter creation
- **PDF Export**: Download letters as PDF with consistent A4 sizing
- **Course Management**: Add courses with fee structures
- **Analytics**: View admission statistics and reports
- **Responsive Design**: Works on desktop and mobile devices
- **Offline Support**: Progressive Web App (PWA) capabilities

## 🚀 Live Demo

Visit: [https://yourusername.github.io/repository-name](https://yourusername.github.io/repository-name)

## 📱 Usage

1. **Select Campus**: Choose between West Campus or Town Campus
2. **Add Student**: Enter student information and course details
3. **Generate Letters**: System automatically creates admission and bursary letters
4. **Download PDF**: Export letters as PDF files
5. **Manage Records**: View, edit, or delete student records

## 🏗️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: IndexedDB (client-side database)
- **PDF Generation**: jsPDF + html2canvas
- **Charts**: Chart.js
- **PWA**: Service Worker for offline functionality

## 📦 Installation

### Option 1: GitHub Pages (Recommended)
1. Fork this repository
2. Go to Settings > Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/repository-name.git
   ```
2. Open `ADM/index.html` in your browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 📁 File Structure

```
├── ADM/
│   └── index.html          # Main application
├── manifest.json           # PWA manifest
├── sw.js                  # Service worker
├── eavi.png               # System icon
├── image.png              # Header image
├── stamp.png              # Official stamp
└── README.md              # This file
```

## 🔧 Configuration

### Campus Settings
- **West Campus**: Paybill 4129827
- **Town Campus**: Paybill 257557

### Default Accounts
- **Equity Bank**: 0470292838961
- **KCB Bank**: 1115207350

## 📋 Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Internet connection (for initial load and CDN libraries)

## 🛠️ Development

### Adding New Courses
1. Go to Settings tab
2. Enter course name
3. Upload fee structure PDF
4. Click "Add Course"

### Customizing Templates
The system includes 4 letter templates:
- Classic
- Modern
- Minimal
- Bordered

## 📊 Data Storage

All data is stored locally using IndexedDB:
- Student records
- Course information
- System settings
- Uploaded images

## 🔒 Privacy & Security

- All data stored locally in browser
- No external servers or databases
- Campus-based data separation
- No passwords required (campus selection only)

## 📱 Progressive Web App

Install as an app on your device:
1. Open in browser
2. Look for "Install" or "Add to Home Screen" option
3. Follow browser prompts

## 🆘 Support

For issues or questions:
1. Check existing GitHub issues
2. Create a new issue with details
3. Include browser and device information

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**East Africa Vision Institute (EAVI)**  
Admission & Bursary Management System