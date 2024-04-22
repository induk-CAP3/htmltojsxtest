import React from 'react';
import '../styles/main.scss';  // CSS 임포트
import NavBar from './NavBar'; // NavBar 컴포넌트 임포트
import Footer from './Footer'; // Footer 컴포넌트 임포트

const MainPage = () => {
    return (
        <div>
            <header>
                <h1><img src="/AEDWEBLOGO.png" alt="Logo" className="logo" /></h1>
                <NavBar />  { }
            </header>

            <main>
                <div id="map-container"></div>
                <div id="map"></div>

                <section id="introduction" className="section">
                    <h2>검색창 들어갈 예정</h2>
                    <p>검색창이 들어올 예정 검색 구현 아직 안해서...</p>
                </section>

                <section id="projects" className="section">
                    <h2>뭔가 들어올 수 있는 공간</h2>
                    <p>뭔가 가능한 공간</p>
                </section>
            </main>

            <Footer />  { }
        </div>
    );
};

export default MainPage;