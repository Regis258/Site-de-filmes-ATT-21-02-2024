<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive site de Filmes e séries</title>
    <!-- Link do CSS -->
    <link rel="stylesheet" href="/css/style.css">
    <!--  Link Swiper CSS  -->
    <link rel="stylesheet" href="/css/swiper-bundle.min.css">
    <!-- FAV icones -->
    <link rel="shortcut icon" href="img/img/fav-icon.png" type="image/x-icon">
    <!-- BOX Icones -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <!--
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    -->


</head>
<body>
    <!-- Header -->
    <header>
        <!-- Nav -->
        <div class="nav container">
            <!-- Logo -->
            <a href="index.html" class="logo">
                Filmes<span>Vel</span>
            </a>
            <!-- Caixa de Pesquisa -->
            <div class="search-box">
                <input type="search" name="" id="search-input" placeholder="Pesquisar">
                <i class='bx bx-search'></i>
            </div>
            <!-- Usuário -->
            <a href="#" class="user">
                <img src="./img/img/regis.jpg" alt="" class="user-img">
            </a>
            <!-- Barra de navegação (navbar) -->
            <div class="navbar">
                <a href="#Inicio" class="nav-link nav-active">
                    <i class='bx bx-home'></i>
                    <span class="nav-link-title">Inicio</span>
                </a>
                <a href="#Inicio" class="nav-link">
                    <i class='bx bxs-hot' ></i>
                    <span class="nav-link-title">Tendência</span>
                </a>
                <a href="#Inicio" class="nav-link">
                    <i class='bx bx-compass' ></i>
                    <span class="nav-link-title">Explorar</span>
                </a>
                <a href="#Inicio" class="nav-link">
                    <i class='bx bx-tv' ></i>
                    <span class="nav-link-title">Filmes</span>
                </a>
                <a href="#Inicio" class="nav-link">
                    <i class='bx bx-heart'></i>
                    <span class="nav-link-title">Favoritos</span>
                </a>
                <a href="#Inicio" class="nav-link">
                    <i class='bx bx-user-circle'></i>
                    <span class="nav-link-title">Login</span>
                </a>
            </div>
        </div>
    </header>
    <!--    Sessão inicio (Home)    -->
    <section class="home container" id="home">
        <!-- imagem inicio -->
        <img src="/img/img/home-background.png" alt="" class="home-img">
        <!-- Texto Inicio -->
        <div class="home-text">
            <h1 class="home-title">Dupla Explosiva 2 </h1>   
                <a href="#" class="watch-btn">
                    <i class='bx bx-right-arrow'></i>
                    <span>Assista ao Trailer</span>
                </a>
        </div>
    </section>
    <!--    Inicio Fim    -->
    <!--    Inicio da sessão popular    -->
    <section class="popular container" id="popular">
        <!--    Heading    -->
        <div class="heading">
            <h2 class="heading-title">Populares</h2>
            <!-- Swiper Buttons -->
            <div class="swiper-btn">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
        <!--    Conteúdo    -->
        <div class="popular-content swiper">
            <div class="swiper-wrapper">
                <!-- Caixa de Filmes 1 -->
                <div class="swiper-slide">
                    <div class="movie-box">
                        <img src="img/got/D2ipZaWWwAAOpfk (1).jpg" alt="" class="movie-box-img">
                        <div class="box-text">
                            <h2 class="movie-title"></h2>
                            <span class="movie-type"></span>
                            <a href="/Trailers/got-trailer.html" class="watch-btn play-btn">
                                <i class='bx bx-right-arrow'></i>
                            </a>
                        </div>
                    </div>
                </div>
                 <!-- Caixa de Filmes 2 -->
                <div class="swiper-slide">
                    <div class="movie-box">
                        <img src="img/a freira 2/images.jpg" alt="" class="movie-box-img">
                        <div class="box-text">
                            <h2 class="movie-title"></h2>
                            <span class="movie-type"></span>
                            <a href="#" class="watch-btn play-btn">
                                <i class='bx bx-right-arrow'></i>
                            </a>
                        </div>
                    </div>
                </div>
                 <!-- Caixa de Filmes 3 -->
                <div class="swiper-slide">
                    <div class="movie-box">
                        <img src="img/img/Homem aranha longe de casa.jpg" alt="" class="movie-box-img">
                        <div class="box-text">
                            <h2 class="movie-title"></h2>
                            <span class="movie-type"></span>
                            <a href="#" class="watch-btn play-btn">
                                <i class='bx bx-right-arrow'></i>
                            </a>
                        </div>
                    </div>
                </div>
                 <!-- Caixa de Filmes 4 -->
                <div class="swiper-slide">
                    <div class="movie-box">
                        <img src="img/img/jumanji.jpg" alt="" class="movie-box-img">
                        <div class="box-text">
                            <h2 class="movie-title"></h2>
                            <span class="movie-type"></span>
                            <a href="/play-page.html" class="watch-btn play-btn">
                                <i class='bx bx-right-arrow'></i>
                            </a>
                        </div>
                    </div>
                </div>
                 <!-- Caixa de Filmes 5 -->
                <div class="swiper-slide">
                    <div class="movie-box">
                        <img src="img/img/Loki.jpg" alt="" class="movie-box-img">
                        <div class="box-text">
                            <h2 class="movie-title"></h2>
                            <span class="movie-type"></span>
                            <a href="#" class="watch-btn play-btn">
                                <i class='bx bx-right-arrow'></i>
                            </a>
                        </div>
                    </div>
                </div>
                 <!-- Caixa de Filmes 6 -->
                <div class="swiper-slide">
                    <div class="movie-box">
                        <img src="img/img/Jungle cruise.jpg" alt="" class="movie-box-img">
                        <div class="box-text">
                            <h2 class="movie-title"></h2>
                            <span class="movie-type"></span>
                            <a href="#" class="watch-btn play-btn">
                                <i class='bx bx-right-arrow'></i>
                            </a>
                        </div>
                    </div>
                </div>
                 <!-- Caixa de Filmes 7 -->
                <div class="swiper-slide">
                    <div class="movie-box">
                        <img src="img/img/Os Eternos.jpg" alt="" class="movie-box-img">
                        <div class="box-text">
                            <h2 class="movie-title"></h2>
                            <span class="movie-type"></span>
                            <a href="#" class="watch-btn play-btn">
                                <i class='bx bx-right-arrow'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Caixa de Filmes 8 -->
                <div class="swiper-slide">
                    <div class="movie-box">
                        <img src="img/img/Shang-chi.jpg" alt="" class="movie-box-img">
                        <div class="box-text">
                            <h2 class="movie-title"></h2>
                            <span class="movie-type"></span>
                            <a href="#" class="watch-btn play-btn">
                                <i class='bx bx-right-arrow'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>   
    <!--    Fim da sessão popular    -->

    <!--    Sessão Filmes Start    -->
    <section class="movies container" id="movies">
        <!--    Heading    -->
        <div class="heading">
            <h2 class="heading-title">Filmes e Séries</h2>
        </div>
        <!-- Movies content -->
        <div class="movies-content">
            <!-- Caixa de filmes 1 -->
            <div class="movie-box">
                <img src="img/A Maldição do Queen Mary/images (1).jpg" alt="" class="movie-box-img">
                <div class="box-text">
                    <h2 class="movie-title"></h2>
                    <span class="movie-type"></span>
                    <a href="#" class="watch-btn play-btn">
                        <i class='bx bx-right-arrow'></i>
                    </a>
                </div>
            </div>
            <!-- Caixa de filmes 2 -->
            <div class="movie-box">
                <img src="img/Elementos/images.jpg" alt="" class="movie-box-img">
                <div class="box-text">
                    <h2 class="movie-title"></h2>
                    <span class="movie-type"></span>
                    <a href="#" class="watch-btn play-btn">
                        <i class='bx bx-right-arrow'></i>
                    </a>
                </div>
            </div>
            <!-- Caixa de filmes 3 -->
            <div class="movie-box">
                <img src="img/Dungeons & Dragons Honra Entre Rebeldes/images.jpg" alt="" class="movie-box-img">
                <div class="box-text">
                    <h2 class="movie-title"></h2>
                    <span class="movie-type"></span>
                    <a href="#" class="watch-btn play-btn">
                        <i class='bx bx-right-arrow'></i>
                    </a>
                </div>
            </div>
             <!-- Caixa de filmes 4 -->
             <div class="movie-box">
                <img src="img/A Morte do Demônio A Ascensão/images (1).jpg" alt="" class="movie-box-img">
                <div class="box-text">
                    <h2 class="movie-title"></h2>
                    <span class="movie-type"></span>
                    <a href="#" class="watch-btn play-btn">
                        <i class='bx bx-right-arrow'></i>
                    </a>
                </div>
            </div>
             <!-- Caixa de filmes 5 -->
             <div class="movie-box">
                <img src="img/Esquema de Risco/images.jpg" alt="" class="movie-box-img">
                <div class="box-text">
                    <h2 class="movie-title"></h2>
                    <span class="movie-type"></span>
                    <a href="#" class="watch-btn play-btn">
                        <i class='bx bx-right-arrow'></i>
                    </a>
                </div>
            </div>
            <!-- Caixa de filmes 6 -->
            <div class="movie-box">
                <img src="img/Jogos Vorazes – A Cantiga dos Pássaros/images (1).jpg" alt="" class="movie-box-img">
                <div class="box-text">
                    <h2 class="movie-title"></h2>
                    <span class="movie-type"></span>
                    <a href="#" class="watch-btn play-btn">
                        <i class='bx bx-right-arrow'></i>
                    </a>
                </div>
            </div>
            <!-- Caixa de filmes 7 -->
            <div class="movie-box">
                <img src="img/Ressurreição do mal/images (1).jpg" alt="" class="movie-box-img">
                <div class="box-text">
                    <h2 class="movie-title"></h2>
                    <span class="movie-type"></span>
                    <a href="#" class="watch-btn play-btn">
                        <i class='bx bx-right-arrow'></i>
                    </a>
                </div>
            </div>
            <!-- Caixa de filmes 8 -->
            <div class="movie-box">
                <img src="img/Sobrenatural A Porta Vermelha/images.jpg" alt="" class="movie-box-img">
                <div class="box-text">
                    <h2 class="movie-title"></h2>
                    <span class="movie-type"></span>
                    <a href="#" class="watch-btn play-btn">
                        <i class='bx bx-right-arrow'></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!--    Sessão Filmes Fim    -->
    <!--    Proxima página    -->
    <div class="next-page">
        <a href="#" class="next-btn">Proxima Página</a>
    </div>
    <!-- Copyright -->
    <div class="copyright">
        <p>&#169; Todos os Direitos reservados. </p>
    </div>


            <!--

            <h1 class="sinopse"><p>Game of Thrones conta a história de um lugar onde uma força destruiu o equilíbrio
                das estações, há muito tempo. Em uma terra onde os verões podem durar vários anos e o inverno toda
                uma vida, as reivindicações e as forças sobrenaturais correm as portas do Reino dos Sete Reinos.
                A irmandade da Patrulha da Noite busca proteger o reino de cada criatura que pode vir de lá da 
                Muralha, mas já não tem os recursos necessários para garantir a segurança de todos. Depois de um
                verão de dez anos, um inverno rigoroso promete chegar com um futuro mais sombrio. Enquanto isso,
                conspirações e rivalidades correm no jogo político pela disputa do Trono de Ferro, o símbolo 
                do poder absoluto.</p></h1>

            --> 




    <!-- Link do Swiper JS (Botão de navegação de filmes < >) -->
    <script src="/JavaScript/swiper-bundle.min.js"></script>
    <!-- Link do JavaScript -->
    <script src="JavaScript/script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <!--
            video https://www.youtube.com/watch?v=vwYiYMxUu4o&ab_channel=CarpoolVenom
            minuto do video 40:32

            icones
            https://boxicons.com/?query=tv

            fontes 
            https://fonts.google.com/specimen/Poppins?query=poppins

            swiper
            https://swiperjs.com/
            enviar


    -->
</body>
</html>