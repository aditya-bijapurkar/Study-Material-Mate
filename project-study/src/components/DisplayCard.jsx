import React from "react";
import parse from "html-react-parser";
import { Link, Stack } from "@mui/material";

const DisplayCard = ({ data }) => {
    // const imgSrc = data.pagemap.cse_image[0].src;
    // console.log(imgSrc);

    return (
        <div
            className="display-card"
            style={{
                borderRadius: "10px",
                marginTop: "5px",
                marginBottom: "5px",
            }}
        >
            <div style={{ marginLeft: "10px" }}>
                <Stack direction="row">
                    <img
                        // src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRtbYjjezl1LjCPxzWlcqP8qqUwOZ31ap1fvMz9w5tq1YYY8_pSL4ITR6E"
                        // src={imgSrc}
                        alt="image error"
                        style={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "50%",

                            marginRight: "10px",
                            marginTop: "5px",
                        }}
                    />
                    <pre style={{ marginTop: "25px", fontSize: "15px" }}>
                        {parse(data.htmlTitle)}
                    </pre>
                </Stack>
                <Link
                    href={data.link}
                    style={{ color: "rgb(85, 178, 249)", marginLeft: "60px" }}
                    target="_blank"
                >
                    {data.displayLink}
                </Link>
            </div>
            <p style={{ marginLeft: "10px", paddingBottom: "10px" }}>
                {parse(data.htmlSnippet)}
            </p>
        </div>
    );
};

export default DisplayCard;
