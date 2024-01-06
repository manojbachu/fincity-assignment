import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: flex-start;
    margin: auto;
`;

export const Name = styled.h3`
    margin-top: 20px;
`;

export const NavUnOrdList = styled.ul`
    background-image: url("https://fincity-assignment.vercel.app/_next/image?url=%2Fbanner-img.png&w=750&q=75");
    background-repeat: no-repeat;
    background-size: contain;
    height: 650px;
    width: 700px;
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0;
`;

export const NavElement = styled.li`
    margin: 20px;
`;

export const ProfileContainer = styled.div`
    margin-left: 25px;
`;

export const ProfileSubContainer = styled.div`
    margin-top: 100px;
    width: 600px;
`;

export const Profession = styled.h2`
    font-family: "Times New Roman";
    line-height: 25px;
    color: #fc9003;
`;

export const MyName = styled.h1`
    font-size: 70px;
    font-family: "Times New Roman";
    margin-top: 10px;
    margin-bottom: 15px;
`;

export const ShortTextAboutMe = styled.p`
    color: #7d7c7a;
    font-size: 20px;
    font-family: "Times New Roman";
    line-height: 35px;
`;

export const ProjectButton = styled.button`
    background-color: #fccc2b;
    margin-right: 12px;
    border: none;
    padding: 8px 20px 8px 20px;
    border-radius: 5px;
    font-size: 16px;
`;

export const LinkedIn = styled.button`
    background: none;
    border: 1px solid;
    padding: 8px 20px 8px 20px;
    border-radius: 5px;
    font-size: 16px;
`;
