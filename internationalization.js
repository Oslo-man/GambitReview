        // =====================================================
        // PIECE SVG DEFINITIONS (Wikimedia Commons Style)
        // =====================================================
        const PIECE_SVG = {
            'wK': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linejoin="miter" d="M22.5 11.63V6M20 8h5"/><path fill="#fff" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path fill="#fff" d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"/><path d="M12.5 30c5.5-3 14.5-3 20 0M12.5 33.5c5.5-3 14.5-3 20 0M12.5 37c5.5-3 14.5-3 20 0"/></g></svg>`,
            'wQ': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path stroke-linecap="butt" d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L6 14l3 12z"/><path stroke-linecap="butt" d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path fill="none" d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"/></g></svg>`,
            'wR': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linecap="butt" d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5"/><path d="M34 14l-3 3H14l-3-3"/><path stroke-linecap="butt" stroke-linejoin="miter" d="M31 17v12.5H14V17"/><path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/><path fill="none" stroke-linejoin="miter" d="M11 14h23"/></g></svg>`,
            'wB': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#fff" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path stroke-linejoin="miter" d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"/></g></svg>`,
            'wN': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#fff" d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path fill="#fff" d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><path fill="#000" d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zM14.933 15.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z"/></g></svg>`,
            'wP': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>`,
            'bK': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linejoin="miter" d="M22.5 11.63V6M20 8h5"/><path fill="#000" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path fill="#000" d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"/><path stroke="#fff" stroke-width="1.5" d="M12.5 30c5.5-3 14.5-3 20 0M12.5 33.5c5.5-3 14.5-3 20 0M12.5 37c5.5-3 14.5-3 20 0"/><path fill="none" stroke="#fff" stroke-width="1" d="M20.5 25s3-5 2.5-8.5M24.5 25s-3-5-2.5-8.5"/></g></svg>`,
            'bQ': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#000" stroke="none"><circle cx="6" cy="12" r="2.75"/><circle cx="14" cy="9" r="2.75"/><circle cx="22.5" cy="8" r="2.75"/><circle cx="31" cy="9" r="2.75"/><circle cx="39" cy="12" r="2.75"/></g><path fill="#000" stroke-linecap="butt" d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"/><path fill="#000" stroke-linecap="butt" d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path fill="none" stroke="#fff" d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"/></g></svg>`,
            'bR': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#000" stroke-linecap="butt" d="M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z"/><path fill="#000" stroke-linecap="butt" stroke-linejoin="miter" d="M14 29.5v-13h17v13H14z"/><path fill="#000" stroke-linecap="butt" d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z"/><path fill="none" stroke="#fff" stroke-linejoin="miter" stroke-width="1" d="M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23"/></g></svg>`,
            'bB': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#000" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path stroke="#fff" stroke-linejoin="miter" d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"/></g></svg>`,
            'bN': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#000" stroke="#333" d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path fill="#000" stroke="#333" d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><circle cx="9" cy="25.5" r="1.5" fill="#fff"/><ellipse cx="14.5" cy="15.5" rx="1.5" ry="3" fill="#fff" transform="rotate(30 14.5 15.5)"/><path fill="none" stroke="#555" stroke-width="1" d="M25 10.5c4 1 7 3 9 7M27 14c2 1 4 3 5 6"/></g></svg>`,
            'bP': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#000" stroke="#333" stroke-width="1.5" stroke-linecap="round"/></svg>`
        };

        // =====================================================
        // CONSTANTS
        // =====================================================
        const ANIMATION = {
            DEFAULT_DURATION: 300,
            REVIEW_DURATION: 300,
            SHAKE_DURATION: 400,
            PULSE_DURATION: 300,
            OPPONENT_DELAY: 150,
            INITIAL_MOVE_DURATION: 0,
            END_GAME_DELAY: 3000,
            ALERT_AUTO_CLOSE: 3000
        };
        
        const TIMER_THRESHOLDS = {
            WARNING: 30,
            CRITICAL: 10
        };
        
        const DRAG_SCALE = 0.9;     // Drag piece size relative to square
        const PIECE_SCALE = 0.85;    // Static piece size relative to square
        const HIGHSCORE_MAX = 100;   // Max stored highscores

// =====================================================
// INTERNATIONALIZATION (PP_36)
// =====================================================
const LANG = {
    id: {
        // Page title & errors
        pageTitle: 'puzzle kustom | Latihan Catur',
        engineLoadError: 'Mesin catur (chess.js) gagal dimuat.',
        checkConnection: 'Periksa koneksi internet kamu dan muat ulang halaman.',
        reload: 'Muat Ulang',
        // Settings
        settings: 'Pengaturan',
        dailyPuzzle: 'Puzzle Harian',
        timeLimit: 'Batas Waktu',
        minute1: '1 Menit',
        minutes3: '3 Menit',
        minutes5: '5 Menit',
        minutes10: '10 Menit',
        unlimited: 'Tidak Terbatas',
        minutesUnit: 'Menit',
        startRating: 'Rating Awal',
        veryEasy: 'Sangat Mudah (~600)',
        easy: 'Mudah (~1000)',
        medium: 'Sedang (~1400)',
        advanced: 'Lanjutan (~1800)',
        hard: 'Sulit (~2200)',
        veryHard: 'Sangat Sulit (~2600)',
        insane: 'Tersulit (~3000)',
        mistakes: 'Kesalahan',
        mistake1: '1 Kesalahan',
        mistakes3: '3 Kesalahan',
        mistakes5: '5 Kesalahan',
        mistakesUnit: 'Kesalahan',
        increasePerPuzzle: 'Kenaikan per Puzzle',
        none: 'Tidak Ada',
        slow: 'Lambat (+10)',
        normal: 'Normal (+15)',
        fast: 'Cepat (+25)',
        veryFast: 'Sangat Cepat (+50)',
        perPuzzle: 'per Puzzle',
        themeFilter: 'Pilih Tema Puzzle',
        allThemes: 'Semua Tema',
        reset: 'Reset',
        atLeastOneTheme: 'Minimal Satu tema',
        atLeastOneThemeTooltip: 'Puzzle harus mengandung minimal satu tema yang dipilih',
        allThemesMatch: 'Semua tema',
        allThemesMatchTooltip: 'Puzzle harus mengandung semua tema yang dipilih',
        sound: 'Suara',
        soundMoves: 'Gerakan',
        soundEffects: 'Efek Suara',
        soundAllOn: 'Semua Aktif',
        soundOff: 'Mati',
        advancedSettings: 'Pengaturan Lain',
        bonusTimePerMove: 'Bonus Waktu per Langkah',
        second1: '1 Detik',
        seconds2: '2 Detik',
        seconds3: '3 Detik',
        seconds5: '5 Detik',
        secondsUnit: 'Detik',
        onMistake: 'Saat Salah',
        tryAgain: 'Coba Lagi',
        nextPuzzle: 'Puzzle Berikutnya',
        showHints: 'Tampilkan Petunjuk',
        hintsThemes: 'tema',
        hintsPiece: 'Bidak',
        hintsAll: 'Semua',
        hintsNone: 'Tidak Ada',
        colorChoice: 'Pilihan Warna',
        colorMixed: 'Campuran',
        colorWhite: 'Putih',
        colorBlack: 'Hitam',
        colorRandom: 'Acak',
        showRating: 'Tampilkan Rating',
        on: 'Aktif',
        off: 'Nonaktif',
        pieceCount: 'Jumlah Bidak',
        startGame: 'Mulai Permainan',
        // Game screen
        time: 'Waktu',
        solved: 'Terpecahkan',
        mistakesLabel: 'Kesalahan',
        rating: 'Rating',
        puzzleProgress: 'Progres Puzzle',
        findBestMove: 'Temukan langkah terbaik!',
        moveInputPlaceholder: 'Masukkan langkah (mis. Nf3)',
        continue_: 'Lanjut',
        themesHintBtn: 'Tentang tema',
        showPieceBtn: 'Petunjuk',
        endGame: 'Akhiri Permainan',
        // Feedback
        solvedMsg: '\u2713 Terpecahkan!',
        wrongMsg: '\u2717 Salah!',
        wrongTryAgainMsg: '\u2717 Salah! Coba lagi.',
        checkmateMsg: 'Skakmat!',
        drawMsg: 'Remis!',
        yourMove: 'Giliranmu...',
        invalidMove: 'Langkah tidak valid',
        invalidMoveWith: 'Langkah tidak valid: ',
        invalidPuzzle: 'Puzzle tidak valid',
        invalidPosition: 'Posisi tidak valid',
        allpuzzlePlayed: 'Semua puzzle dengan filter ini sudah dimainkan',
        nopuzzleForFilter: 'Tidak ada puzzle untuk filter ini',
        errorLoadingpuzzle: 'Gagal memuat puzzle',
        // Game over
        gameOver: 'Permainan Selesai!',
        puzzleSolved: 'puzzle terpecahkan',
        highestRating: 'Rating Tertinggi: ~',
        reviewpuzzle: 'Lihat hasil',
        playAgain: 'Main Lagi',
        firstHighScore: '\ud83c\udfc6 Skor Tertinggi Pertama!',
        newHighScore: '\ud83c\udfc6 Skor Tertinggi Baru!',
        before: 'Sebelum',
        new_: 'Baru',
        now: 'Sekarang',
        highScore: '\ud83c\udfc6 Skor Tertinggi',
        highScoreForSettings: 'Skor tertinggi untuk pengaturan ini',
        solvedCount: 'terpecahkan',
        // Daily puzzle
        dailySolved: 'Terpecahkan!',
        dailyUnsolved: 'Belum Terpecahkan',
        dailyThemes: 'Tema: ',
        dailyTime: 'Waktu: ',
        dailyMistakes: 'Kesalahan: ',
        dailyFirstTry: 'Percobaan pertama!',
        viewSolution: 'Lihat Solusi',
        morepuzzle: 'Lebih banyak puzzle!',
        // Review screen
        puzzleOverview: 'hasil Puzzle',
        total: 'Total:',
        reviewSolved: 'Terpecahkan:',
        reviewUnsolved: 'Belum Terpecahkan:',
        filterAll: 'Semua',
        byNumber: 'Berdasarkan Nomor',
        byRating: 'Berdasarkan Rating',
        byTime: 'Berdasarkan Waktu',
        byAttempts: 'Berdasarkan Percobaan',
        gridView: 'Tampilan Grid',
        listView: 'Tampilan Daftar',
        nopuzzleFound: 'Tidak ada puzzle ditemukan',
        attempts0: '0 Percobaan',
        attempt1: '1 Percobaan',
        attemptsN: 'Percobaan',
        // Review detail
        reviewSolvedStatus: 'Terpecahkan',
        reviewUnsolvedStatus: 'Belum Terpecahkan',
        goToStart: 'Ke Awal',
        back: 'Kembali',
        forward: 'Maju',
        goToEnd: 'Ke Akhir',
        play: 'Putar',
        retry: 'Coba Lagi',
        solution: 'Solusi',
        analysis: 'Analisis',
        attemptsLabel: 'Percobaan:',
        timeLabel: 'Waktu:',
        ratingLabel: 'Rating:',
        themesLabel: 'Tema:',
        puzzleOnLichess: 'Puzzle di Lichess \u2197',
        previous: '\u2190 Sebelumnya',
        next: 'Berikutnya \u2192',
        done: 'Selesai!',
        // Theme hints
        puzzleThemesTitle: '\ud83d\udca1 tema puzzle ini',
        noThemesAvailable: 'Tidak ada tema tersedia',
        movesSingular: 'Langkah',
        movesPlural: 'Langkah',
        // Stockfish
        loadingStockfish: 'Memuat Stockfish...',
        stockfishError: 'Error Stockfish',
        stockfishUnavailable: 'Stockfish tidak tersedia (offline?)',
        analyzing: 'Menganalisis...',
        // Theme categories
        catGamePhases: 'Fase Permainan',
        catCommontemas: 'tema Umum',
        catRaretemas: 'tema Langka',
        catCheckmateGoals: 'Tujuan Skakmat',
        catCheckmatePatterns: 'Pola Skakmat',
        catSpecialMoves: 'Langkah Khusus',
        catLength: 'Panjang',
        catYouthTraining: 'Latihan Pemuda',
        // Theme labels
        themeOpening: 'Pembukaan',
        themeMiddlegame: 'Permainan Tengah',
        themeEndgame: 'Akhir Permainan',
        themeRookEndgame: 'Akhir Permainan Benteng',
        themeBishopEndgame: 'Akhir Permainan Gajah',
        themePawnEndgame: 'Akhir Permainan Pion',
        themeKnightEndgame: 'Akhir Permainan Kuda',
        themeQueenEndgame: 'Akhir Permainan Ratu',
        themeFork: 'Garpu (Serangan Ganda)',
        themeKingsideAttack: 'Serangan Sayap Raja',
        themeSacrifice: 'Pengorbanan',
        themePin: 'Tusukan (Pin)',
        themeAdvancedPawn: 'Pion Maju',
        themeDefensiveMove: 'Langkah Bertahan',
        themeDiscoveredAttack: 'Serangan Tembus',
        themeDeflection: 'Pengalihan',
        themeQuietMove: 'Langkah Senyap',
        themeHangingPiece: 'Bidak Menggantung',
        themeAttraction: 'Penarik',
        themeExposedKing: 'Raja Terbuka',
        themeSkewer: 'Tusuk Sate (Skewer)',
        themeDiscoveredCheck: 'Skak Tembus',
        themeQueensideAttack: 'Serangan Sayap Ratu',
        themeClearance: 'Pembersihan Jalur',
        themeIntermezzo: 'Langkah Antara (Zwischenzug)',
        themeTrappedPiece: 'Bidak Terjebak',
        themeZugzwang: 'Zugzwang',
        themeAttackingF2F7: 'Serangan ke f2/f7',
        themeCapturingDefender: 'Eliminasi Pembela',
        themeDoubleCheck: 'Skak Ganda',
        themeInterference: 'Interupsi',
        themeXRayAttack: 'Serangan X-Ray',
        themeMate: 'Skakmat',
        themeMateIn1: 'Mat dalam 1',
        themeMateIn2: 'Mat dalam 2',
        themeMateIn3: 'Mat dalam 3',
        themeMateIn4: 'Mat dalam 4',
        themeMateIn5: 'Mat dalam 5+',
        themeBackRankMate: 'Mat Baris Belakang',
        themeRookBishopMate: 'Mat Benteng+Gajah',
        themeRookKnightMate: 'Mat Benteng+Kuda',
        themeSmotheredMate: 'Mat Tercekik',
        themeQueenRookMate: 'Mat Ratu+Benteng',
        themeDoubleBishopMate: 'Mat Gajah+Gajah',
        themeDoubleRookMate: 'Mat Benteng+Benteng',
        themeQueenMate: 'Mat Ratu',
        themeQueenBishopMate: 'Mat Ratu+Gajah',
        themeEnPassant: 'En Passant',
        themePromotion: 'Promosi Pion',
        themeUnderPromotion: 'Promosi Bawah',
        themeOneMove: 'Satu Langkah',
        themeShort: '2 Langkah',
        themeLong: '3 Langkah',
        themeVeryLong: '4+ Langkah',
        themeStufe1: 'Level 1 (400-900)',
        themeStufe2: 'Level 2 (900-1400)',
        themeStufe3: 'Level 3 (1400-1900)',
        themeStufe4: 'Level 4 (1900-2400)',
        themeStufe5: 'Level 5 (2400-2900)'
    }
};

const currentLang = 'id';

function t(key) { return LANG.id[key] || key; }

function applyLanguage() {
    document.documentElement.lang = 'id';
    document.title = t('pageTitle');
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
        el.title = t(el.dataset.i18nTitle);
    });
    document.querySelectorAll('option[data-i18n]').forEach(function(el) {
        el.textContent = t(el.dataset.i18n);
    });
    // Re-render dynamic displays
    if (typeof updateSoundDisplay === 'function') updateSoundDisplay();
    if (typeof updateTipsDisplay === 'function') updateTipsDisplay();
    if (typeof updateThemeFilterDisplay === 'function') updateThemeFilterDisplay();
    if (typeof updatePieceCountDisplay === 'function') updatePieceCountDisplay();
    // Re-render daily link text
    if (typeof initDailyCard === 'function') initDailyCard();
    // Re-build theme filter checkboxes
    if (typeof buildThemeFilter === 'function') buildThemeFilter();
}

        // =====================================================
        // PUZZLE THEMES (dynamic, language-aware)
        // =====================================================
        // Internal category keys for language-independent checks
        var THEME_CATEGORY_KEYS = [
            'catGamePhases', 'catCommontemas', 'catRaretemas',
            'catCheckmateGoals', 'catCheckmatePatterns', 'catSpecialMoves',
            'catLength', 'catYouthTraining'
        ];

        function getPuzzleThemes() {
            return {
                [t('catGamePhases')]: {
                    'opening': t('themeOpening'),
                    'middlegame': t('themeMiddlegame'),
                    'endgame': t('themeEndgame'),
                    'rookEndgame': t('themeRookEndgame'),
                    'bishopEndgame': t('themeBishopEndgame'),
                    'pawnEndgame': t('themePawnEndgame'),
                    'knightEndgame': t('themeKnightEndgame'),
                    'queenEndgame': t('themeQueenEndgame')
                },
                [t('catCommontemas')]: {
                    'fork': t('themeFork'),
                    'kingsideAttack': t('themeKingsideAttack'),
                    'sacrifice': t('themeSacrifice'),
                    'pin': t('themePin'),
                    'advancedPawn': t('themeAdvancedPawn'),
                    'defensiveMove': t('themeDefensiveMove'),
                    'discoveredAttack': t('themeDiscoveredAttack'),
                    'deflection': t('themeDeflection'),
                    'quietMove': t('themeQuietMove'),
                    'hangingPiece': t('themeHangingPiece'),
                    'attraction': t('themeAttraction'),
                    'exposedKing': t('themeExposedKing'),
                    'skewer': t('themeSkewer'),
                    'discoveredCheck': t('themeDiscoveredCheck')
                },
                [t('catRaretemas')]: {
                    'queensideAttack': t('themeQueensideAttack'),
                    'clearance': t('themeClearance'),
                    'intermezzo': t('themeIntermezzo'),
                    'trappedPiece': t('themeTrappedPiece'),
                    'zugzwang': t('themeZugzwang'),
                    'attackingF2F7': t('themeAttackingF2F7'),
                    'capturingDefender': t('themeCapturingDefender'),
                    'doubleCheck': t('themeDoubleCheck'),
                    'interference': t('themeInterference'),
                    'xRayAttack': t('themeXRayAttack')
                },
                [t('catCheckmateGoals')]: {
                    'mate': t('themeMate'),
                    'mateIn1': t('themeMateIn1'),
                    'mateIn2': t('themeMateIn2'),
                    'mateIn3': t('themeMateIn3'),
                    'mateIn4': t('themeMateIn4'),
                    'mateIn5': t('themeMateIn5')
                },
                [t('catCheckmatePatterns')]: {
                    'backRankMate': t('themeBackRankMate'),
                    'rookBishopMate': t('themeRookBishopMate'),
                    'rookKnightMate': t('themeRookKnightMate'),
                    'smotheredMate': t('themeSmotheredMate'),
                    'queenRookMate': t('themeQueenRookMate'),
                    'doubleBishopMate': t('themeDoubleBishopMate'),
                    'doubleRookMate': t('themeDoubleRookMate'),
                    'queenMate': t('themeQueenMate'),
                    'queenBishopMate': t('themeQueenBishopMate')
                },
                [t('catSpecialMoves')]: {
                    'enPassant': t('themeEnPassant'),
                    'promotion': t('themePromotion'),
                    'underPromotion': t('themeUnderPromotion')
                },
                [t('catLength')]: {
                    'oneMove': t('themeOneMove'),
                    'short': t('themeShort'),
                    'long': t('themeLong'),
                    'veryLong': t('themeVeryLong')
                },
                [t('catYouthTraining')]: {
                    'stufe1': t('themeStufe1'),
                    'stufe2': t('themeStufe2'),
                    'stufe3': t('themeStufe3'),
                    'stufe4': t('themeStufe4'),
                    'stufe5': t('themeStufe5')
                }
            };
        }

        // Mapping for combined mate patterns
        const THEME_MAPPINGS = {
            'rookKnightMate': ['anastasiaMate', 'arabianMate', 'cornerMate', 'hookMate', 'vukovicMate'],
            'rookBishopMate': ['morphysMate', 'operaMate', 'pillsburysMate'],
            'queenRookMate': ['triangleMate', 'killBoxMate'],
            'queenBishopMate': ['balestraMate'],
            'doubleBishopMate': ['bodenMate', 'doubleBishopMate'],
            'doubleRookMate': ['blindSwineMate'],
            'queenMate': ['dovetailMate'],
            'backRankMate': ['backRankMate'],
            'smotheredMate': ['smotheredMate']
        };
        
        // Reverse mapping: Lichess-specific mate theme -> consolidated theme key
        const REVERSE_MATE_MAPPINGS = {};
        for (const [consolidated, subThemes] of Object.entries(THEME_MAPPINGS)) {
            for (const sub of subThemes) {
                REVERSE_MATE_MAPPINGS[sub.toLowerCase()] = consolidated;
            }
        }
        
        // Stufen/Jugendtraining: Cumulative themes per level
        const STUFEN_THEMES = {
            'stufe1': ['mateIn1', 'hangingPiece', 'defensiveMove', 'fork'],
            'stufe2': ['mateIn2', 'pin', 'discoveredAttack', 'capturingDefender', 'intermezzo', 'pawnEndgame'],
            'stufe3': ['doubleCheck', 'discoveredCheck', 'advancedPawn', 'kingsideAttack', 'xRayAttack', 'underPromotion'],
            'stufe4': ['mateIn3', 'interference', 'attraction', 'clearance', 'exposedKing'],
            'stufe5': ['mateIn4', 'mateIn5', 'zugzwang', 'trappedPiece', 'queensideAttack', 'veryLong', 'rookEndgame', 'pawnEndgame']
        };
        
        // Stufen rating ranges
        const STUFEN_RATINGS = {
            'stufe1': [400, 900],
            'stufe2': [900, 1400],
            'stufe3': [1400, 1900],
            'stufe4': [1900, 2400],
            'stufe5': [2400, 2900]
        };

