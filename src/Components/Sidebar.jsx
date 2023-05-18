import React from "react";
import Cards from "./Cards";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import profileIcon from '../Assets/Images/profileIcon.jpg'
import Attendance from '../Assets/Images/Attendance.svg'
import Graph from '../Assets/Images/Graph.svg'
import Library from '../Assets/Images/Library.svg'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

function Sidebar({UserName,mode,toggleMode}) {
  return (
    <div className="flex">
      <aside className="h-screen sticky top-0">
        <nav
          className={` bg-${mode} w-20 h-full justify-between flex flex-col shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.6),_10px_10px_30px_4px_rgba(45,78,255,0.4)] `}
        >
          <div className="mt-10 mb-10">
            <a href="#">
              
              <img
                src={profileIcon}
                className={`rounded-full border-2 border-slate-400 w-10 h-10 mb-3 mx-auto`}
              />
            </a>
            <div className="mt-10">
              <ul>
                <li className="mb-10">
                  <a href="#">
                    <span className="fill-current text-blue-600 font-semibold hover:text-green-500">
                      <svg
                        className="fill-current h-6 w-6  mx-auto  "
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        x
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M6.9 0h.2A2.9 2.9 0 0 1 10 2.9v1.2A2.9 2.9 0 0 1 7.1 7h-.2A2.9 2.9 0 0 1 4 4.1V2.9A2.9 2.9 0 0 1 6.9 0z M14.81 4.58l-4.15 5.82c.226.503.341 1.049.34 1.6v4.67A1.336 1.336 0 0 1 9.67 18l-5.34-.01A1.327 1.327 0 0 1 3 16.67V12a4.012 4.012 0 0 1 4-4 3.9 3.9 0 0 1 2.36.79l3.83-5.37a1 1 0 0 1 1.62 1.16z"
                        ></path>{" "}
                      </svg>
                      <small className="flex justify-center mx-auto fill-current   ">
                        Attendance
                      </small>
                    </span>
                  </a>
                </li>
                <li className="mb-10">
                  <a href="#">
                    <span className=" fill-current text-blue-600 font-semibold hover:text-green-500">
                      <svg
                        className="fill-current h-6 w-6  mx-auto  "
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M30.156 26.492l-6.211-23.184c-0.327-1.183-1.393-2.037-2.659-2.037-0.252 0-0.495 0.034-0.727 0.097l0.019-0.004-2.897 0.776c-0.325 0.094-0.609 0.236-0.86 0.42l0.008-0.005c-0.49-0.787-1.349-1.303-2.33-1.306h-2.998c-0.789 0.001-1.5 0.337-1.998 0.873l-0.002 0.002c-0.5-0.537-1.211-0.873-2-0.874h-3c-1.518 0.002-2.748 1.232-2.75 2.75v24c0.002 1.518 1.232 2.748 2.75 2.75h3c0.789-0.002 1.5-0.337 1.998-0.873l0.002-0.002c0.5 0.538 1.211 0.873 2 0.875h2.998c1.518-0.002 2.748-1.232 2.75-2.75v-16.848l4.699 17.54c0.327 1.182 1.392 2.035 2.656 2.037h0c0.001 0 0.003 0 0.005 0 0.251 0 0.494-0.034 0.725-0.098l-0.019 0.005 2.898-0.775c1.182-0.326 2.036-1.392 2.036-2.657 0-0.252-0.034-0.497-0.098-0.729l0.005 0.019zM18.415 9.708l5.31-1.423 3.753 14.007-5.311 1.422zM18.068 3.59l2.896-0.776c0.097-0.027 0.209-0.043 0.325-0.043 0.575 0 1.059 0.389 1.204 0.918l0.002 0.009 0.841 3.139-5.311 1.423-0.778-2.905v-1.055c0.153-0.347 0.449-0.607 0.812-0.708l0.009-0.002zM11.5 2.75h2.998c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.498 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM8.75 23.25h-5.5v-14.5l5.5-0.001zM10.25 8.75l5.498-0.001v14.501h-5.498zM4.5 2.75h3c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.5 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM7.5 29.25h-3c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.5v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM14.498 29.25h-2.998c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.498v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM28.58 27.826c-0.164 0.285-0.43 0.495-0.747 0.582l-0.009 0.002-2.898 0.775c-0.096 0.026-0.206 0.041-0.319 0.041-0.575 0-1.060-0.387-1.208-0.915l-0.002-0.009-0.841-3.14 5.311-1.422 0.841 3.14c0.027 0.096 0.042 0.207 0.042 0.321 0 0.23-0.063 0.446-0.173 0.63l0.003-0.006z"></path>{" "}
                      </svg>
                      <small className="flex justify-center mx-auto fill-current   ">
                        Library
                      </small>
                      <small className="flex justify-center mx-auto fill-current   ">
                        Records
                      </small>
                    </span>
                  </a>
                </li>
                <li className="mb-10">
                  <a href="#">
                    <span className=" fill-current text-blue-600 font-semibold hover:text-green-500">
                      <svg
                        className="fill-current h-6 w-6  mx-auto  "
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1 14C1 9.02944 5.02944 5 10 5C10.6746 5 11.3454 5.07584 12 5.22504V12H18.775C18.9242 12.6546 19 13.3254 19 14C19 18.9706 14.9706 23 10 23C5.02944 23 1 18.9706 1 14ZM16.8035 14H10V7.19648C6.24252 7.19648 3.19648 10.2425 3.19648 14C3.19648 17.7575 6.24252 20.8035 10 20.8035C13.7575 20.8035 16.8035 17.7575 16.8035 14Z"
                          fill="currentColor"
                        />
                      </svg>
                      <small className="flex justify-center mx-auto fill-current   ">
                        Insights
                      </small>
                    </span>
                  </a>
                </li>

                <li className="mb-10">
                  <hr className="dark:border-gray-700/60 mb-4" />

                  <a href="#">
                    <span className=" font-bold ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#9a00ba"
                        className="mx-auto  h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                        />
                      </svg>
                      <small className="flex justify-center mx-auto text-[#9a00ba]   ">
                        Dashboard
                      </small>
                    </span>
                  </a>
                  <hr className="dark:border-gray-700/60 mt-4" />
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-4">
            <div className=" ml-2 mb-10">
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                label={""}
                onClick={toggleMode}
              />
            </div>
            <a href="#">
              <span>
                <svg
                  className="fill-current h-6 w-6 text-blue-600 mx-auto hover:text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  
                >
                  <path
                    d="M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z"
                    fill="currentColor"
                  />
                  <path
                    d="M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </a>
          </div>
        </nav>
      </aside>

      <main
        className={` flex flex-wrap justify-between bg-${mode === "white" ? "white" : "gray-800"} `}
      >
        <div className="w-full">

        <h1 className="w-fit font-semibold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400  to-blue-500 ml-7 mt-7">
          Welcome, {UserName}
        </h1>
        </div>
        <Cards mode={mode} svgType={Attendance} />
        <Cards mode={mode} svgType={Graph} />
        <Cards mode={mode} svgType={Attendance} />
        <Cards mode={mode} svgType={Graph} />
        <Cards mode={mode} svgType={Library} />
        <Cards mode={mode} svgType={Library} />
      </main>
    </div>
  );
}

export default Sidebar;
