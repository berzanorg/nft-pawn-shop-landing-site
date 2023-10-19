import { useEffect } from 'react';

const ThemeSwitcher = () => {

    // Sayfa yüklendiğinde dark mode'u etkinleştir
    useEffect(() => {
        const setDefaultTheme = () => {
            const html = document.querySelector('html');
            // Local storage kontrolü, daha önce tema ayarlandı mı diye (isteğe bağlı)
            const theme = window.localStorage.getItem('theme') || 'dark'; // Varsayılan olarak dark set ediliyor

            if (theme === 'dark') {
                html.classList.add('uk-dark');
            } else {
                // Eğer gelecekte başka bir tema eklemek isterseniz burada kontrol edebilirsiniz,
                // ancak şu anki gereksinimlerinize göre bu kod çalışmayacak.
            }

            // Temayı local storage'da saklayın (isteğe bağlı, kullanıcı yeniden geldiğinde aynı tema uygulanır)
            window.localStorage.setItem('theme', theme);
        };

        setDefaultTheme();
    }, []); // useEffect, bileşen yüklendiğinde sadece bir kere çalıştırılır

    // Kullanıcıya tema değiştirme seçeneği sunmuyoruz, bu yüzden toggle işlevselliğini kaldırdık.
    return null; // UI elemanı olmadığı için null döndürülüyor. Tema değiştirici buton veya switch yok.
};

export default ThemeSwitcher;
