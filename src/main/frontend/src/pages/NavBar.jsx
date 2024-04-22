import React from 'react';
import DropdownMenu from './DropdownMenuButton';
import MenuButton from './MenuButton';

const NavBar = () => (
  <div className="navbar" id="navbar">
    <ul className="menu">
      {/* 주 메뉴 항목 */}
      <li className="main-menu-item"><a href="#aed-location">AED 위치</a></li>
      <li className="main-menu-item"><a href="#er-location">응급실 위치</a></li>
      {/* 드롭다운 메뉴 항목 */}
      <DropdownMenu title="응급처치법">
        <li><a href="scald.html">화상</a></li>
        <li><a href="Bee.html">벌에 쏘였을 때</a></li>
        <li><a href="overbreathing.html">과호흡 증후군</a></li>
        <li><a href="cpr.html">심폐소생술</a></li>
      </DropdownMenu>
      <DropdownMenu title="응급처치 퀴즈">
        <li><a href="quiz_burn.html">화상 응급처치 퀴즈</a></li>
        <li><a href="Bee.html">벌에 쏘였을 때 퀴즈</a></li>
        <li><a href="overbreathing.html">과호흡 증후군 퀴즈</a></li>
        <li><a href="cpr.html">심폐소생술 퀴즈</a></li>
      </DropdownMenu>
    </ul>
    <MenuButton /> {/* 모바일 뷰에서만 보여줄 햄버거 메뉴 버튼 */}
  </div>
);

export default NavBar;