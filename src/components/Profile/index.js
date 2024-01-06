import {
    MainContainer,
    Name,
    NavUnOrdList,
    NavElement,
    ProfileContainer,
    ProfileSubContainer,
    Profession,
    MyName,
    ShortTextAboutMe,
    ProjectButton,
    LinkedIn,
} from "./styledComponents";

const Profile = () => {
    return (
        <>
            <MainContainer>
                <ProfileContainer>
                    <Name>Madelyn Torff</Name>
                    <ProfileSubContainer>
                        <Profession>UI/UX DESIGNER</Profession>
                        <MyName>Hello, My name is Madelyn Torff</MyName>
                        <ShortTextAboutMe>
                            Short text with details about you, what you do or
                            your professional career. You can add more
                            information on the about page.
                        </ShortTextAboutMe>
                    </ProfileSubContainer>
                    <ProjectButton>Project</ProjectButton>
                    <a
                        href="https://www.linkedin.com/in/manoj-bachu/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <LinkedIn>LinkedIn</LinkedIn>
                    </a>
                </ProfileContainer>
                <NavUnOrdList>
                    <NavElement> About</NavElement>
                    <NavElement>Project</NavElement>
                    <NavElement>Contacts</NavElement>
                </NavUnOrdList>
            </MainContainer>
        </>
    );
};
export default Profile;
