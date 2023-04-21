import React from "react";
import Image from "next/image";

import logo_turucar from "public/logo_turucar.png";

const NextImage = ({ ...props }) => (
    <Image src={logo_turucar} alt={"test"} {...props} />
);

export default NextImage;
