document.addEventListener('DOMContentLoaded', function() {
      
      const menuToggle = document.getElementById('menuToggle');
      const mobileDropdown = document.getElementById('mobileDropdown');
      const menuIcon = document.getElementById('menuIcon');
      let isMenuOpen = false;

      menuToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
          // Open menu
          mobileDropdown.classList.remove('max-h-0', 'opacity-0');
          mobileDropdown.classList.add('max-h-96', 'opacity-100');
          menuToggle.setAttribute('aria-expanded', 'true');
          // Change icon to close
          menuIcon.classList.remove('ri-menu-3-line');
          menuIcon.classList.add('ri-close-large-line');
        } else {
          // Close menu
          mobileDropdown.classList.remove('max-h-96', 'opacity-100');
          mobileDropdown.classList.add('max-h-0', 'opacity-0');
          menuToggle.setAttribute('aria-expanded', 'false');
          // Change icon to menu
          menuIcon.classList.remove('ri-close-large-line');
          menuIcon.classList.add('ri-menu-3-line');
        }
      });

      // Close menu when clicking on links
      document.querySelectorAll('#mobileDropdown a').forEach(link => {
        link.addEventListener('click', () => {
          mobileDropdown.classList.remove('max-h-96', 'opacity-100');
          mobileDropdown.classList.add('max-h-0', 'opacity-0');
          isMenuOpen = false;
          menuToggle.setAttribute('aria-expanded', 'false');
          menuIcon.classList.remove('ri-close-large-line');
          menuIcon.classList.add('ri-menu-3-line');
        });
      });
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Mobile menu toggle (existing code remains the same)
        
        // Initialize Splide slider with enhanced features
        const splide = new Splide('.splide', {
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          arrows: false,
          pagination: false,
          speed: 1000,
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
          drag: true,
          dragAngleThreshold: 30,
          classes: {
            arrows: 'splide__arrows hidden md:block',
            arrow : 'splide__arrow bg-white/80 hover:bg-white text-neutral-900',
            prev  : 'splide__arrow--prev left-4',
            next  : 'splide__arrow--next right-4',
            pagination: 'splide__pagination bottom-4',
            page  : 'splide__pagination__page bg-white/50 hover:bg-white',
          }
        }).mount();
      
        // Background image transition effect
        splide.on('mounted move', function() {
          const index = splide.index;
          document.querySelectorAll('[id^="slideBg"]').forEach((bg, i) => {
            bg.style.opacity = i === index ? '1' : '0';
          });
        });
      
        // Add keyboard navigation
        document.addEventListener('keydown', function(e) {
          if (e.key === 'ArrowLeft') {
            splide.go('-1');
          } else if (e.key === 'ArrowRight') {
            splide.go('+1');
          }
        });
      });

    document.addEventListener('DOMContentLoaded', function() {
        // Animasi untuk section testimoni
        const testimoniSection = document.getElementById('testimoni');
        
        const testimoniObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Animasi judul
              document.getElementById('testimoniTitle').classList.remove('translate-y-10', 'opacity-0');
              
              // Animasi card testimoni
              document.getElementById('testimoni1').classList.remove('translate-y-10', 'opacity-0');
              document.getElementById('testimoni2').classList.remove('translate-y-10', 'opacity-0');
              document.getElementById('testimoni3').classList.remove('translate-y-10', 'opacity-0');
              
              // Hentikan observer setelah animasi dijalankan
              testimoniObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 }); // Trigger ketika 10% element terlihat
      
        testimoniObserver.observe(testimoniSection);
      });


      //Testimoni
    document.addEventListener('DOMContentLoaded', function() {
        const section = document.getElementById('tentang');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Jalankan animasi ketika section terlihat
              animateSection();
              // Hentikan observer setelah animasi dijalankan
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2 }); // Threshold 30% dari element harus terlihat
        
        observer.observe(section);
        
        function animateSection() {
          // Animasi gambar masuk dari kiri
          const image = document.getElementById('aboutImage');
          image.classList.remove('translate-x-[-100%]');
          image.classList.remove('opacity-0');
          
          // Animasi teks masuk dari kanan dengan delay bertahap
          setTimeout(() => {
            const title = document.getElementById('aboutTitle');
            title.classList.remove('translate-x-[100%]');
            title.classList.remove('opacity-0');
            
            setTimeout(() => {
              const text1 = document.getElementById('aboutText1');
              text1.classList.remove('translate-x-[100%]');
              text1.classList.remove('opacity-0');
              
              setTimeout(() => {
                const text2 = document.getElementById('aboutText2');
                text2.classList.remove('translate-x-[100%]');
                text2.classList.remove('opacity-0');
                
                // Animasi statistik
                setTimeout(() => {
                  document.getElementById('stat1').classList.remove('scale-0');
                  setTimeout(() => {
                    document.getElementById('stat2').classList.remove('scale-0');
                    setTimeout(() => {
                      document.getElementById('stat3').classList.remove('scale-0');
                    }, 300);
                  }, 300);
                }, 500);
              }, 300);
            }, 300);
          }, 300);
        }
      });

      document.addEventListener('DOMContentLoaded', function () {
        // === Keunggulan Section ===
        const keunggulan = document.getElementById('keunggulan');
        const keunggulanItems = keunggulan.querySelectorAll('.shadow-md');
      
        const keunggulanObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              keunggulanItems.forEach((el, i) => {
                setTimeout(() => {
                  el.classList.add('animate-fade-in');
                }, i * 200);
              });
              keunggulanObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2 });
      
        keunggulanObserver.observe(keunggulan);
      });
      
      document.addEventListener('DOMContentLoaded', function() {
  const produk = document.getElementById('produk');
  const produkCards = produk.querySelectorAll('.product-card');

  const produkObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        produkCards.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add('animate-fade-in');
            // Tambahkan class hover setelah animasi selesai
            setTimeout(() => {
              el.classList.add('hover:scale-105');
            }, 500);
          }, i * 200);
        });
        produkObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  produkObserver.observe(produk);
});
