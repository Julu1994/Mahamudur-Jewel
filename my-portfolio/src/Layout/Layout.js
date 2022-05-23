import React from "react";
import "./layout.scss";
import Header from "../components/header";
import Card from "../components/Card";
import notePic from "../components/resources/noteIMG.png";

function Layout() {
    return (
        <div className="layout-div">
            <Header />
            <div className="card-grid-header">
                <h2>MY PROJECTS</h2>
                <div className="grid-header-bar"></div>
            </div>
            <div className="card-grid">
                <Card
                    title="STICKY NOTES"
                    pic={notePic}
                    name="This App will manage your daily notes virtually"
                    details="#Full-stack  #React #Express #MongoDB "
                />
                <Card
                    title="STICKY NOTES"
                    pic={notePic}
                    name="This App will manage your daily notes virtually"
                    details="#Full-stack  #React #Express #MongoDB "
                />
                <Card
                    title="STICKY NOTES"
                    pic={notePic}
                    name="This App will manage your daily notes virtually"
                    details="#Full-stack  #React #Express #MongoDB "
                />
                <Card
                    title="STICKY NOTES"
                    pic={notePic}
                    name="This App will manage your daily notes virtually"
                    details="#Full-stack  #React #Express #MongoDB "
                />
                <Card
                    title="STICKY NOTES"
                    pic={notePic}
                    name="This App will manage your daily notes virtually"
                    details="#Full-stack  #React #Express #MongoDB "
                />
                <Card
                    title="STICKY NOTES"
                    pic={notePic}
                    name="This App will manage your daily notes virtually"
                    details="#Full-stack  #React #Express #MongoDB "
                />
            </div>
        </div>
    );
}

export default Layout;
