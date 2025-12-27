import styles from "./Components.module.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, loading, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <h1 className={styles.logo} onClick={() => navigate("/")}>
          Run Club
          <span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 300 350"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="andy_jog">
                <rect width="300" height="350" fill="white" />
                <path
                  id="Vector"
                  d="M182.35 210.878C203.977 224.273 222.486 243.599 231.844 267.254C241.202 290.91 240.562 319.029 227.29 340.732C230.995 341.029 234.185 340.589 237.659 339.268"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M160.153 218.317C160.322 241.224 160.329 264.948 150.987 285.864C148.679 291.032 145.375 296.343 140.021 298.179C133.744 300.332 126.935 296.958 121.682 292.903C110.029 283.907 101.507 270.931 97.8816 256.662C94.3268 257.019 89.5555 261.286 89.5555 261.286"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M221.052 195.704C223.23 208.828 228.42 221.443 236.107 232.302C242.368 241.147 251.908 249.435 262.669 248.149C268.904 247.404 274.437 243.413 278.107 238.317C281.778 233.222 283.771 227.102 285.041 220.952C288.356 204.897 286.998 187.906 281.175 172.581C279.14 172.986 276.5 172.554 274.62 171.68C273.617 171.214 272.617 170.466 272.409 169.38C272.206 168.316 272.859 167.234 273.745 166.61C274.631 165.986 275.715 165.724 276.77 165.475"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_4"
                  d="M273.648 161.65C273.471 160.426 274.571 159.254 275.8 159.113C277.029 158.972 278.244 159.687 278.965 160.692C279.687 161.697 279.982 162.948 280.103 164.179C280.265 165.829 280.075 167.665 278.902 168.837"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_5"
                  d="M279.601 161.65C279.425 160.426 280.524 159.254 281.753 159.113C282.982 158.972 284.198 159.687 284.919 160.692C285.64 161.697 285.935 162.948 286.056 164.179C286.219 165.829 286.028 167.665 284.855 168.837"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_6"
                  d="M285.555 161.65C285.378 160.426 286.478 159.254 287.707 159.113C288.935 158.972 290.151 159.687 290.872 160.692C291.593 161.697 291.888 162.948 292.01 164.179C292.172 165.829 291.982 167.665 290.808 168.837"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_7"
                  d="M118.091 213.308C104.287 206.506 90.2525 199.628 75.104 196.918C70.1762 196.036 64.6824 195.724 60.5834 198.597C58.0394 200.381 56.37 203.211 55.4769 206.187C54.5839 209.163 54.4025 212.302 54.3435 215.408C54.106 227.899 55.7649 240.424 59.2456 252.423"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_8"
                  d="M61.7812 250.789C62.3394 249.124 63.8831 247.832 65.6206 247.575C67.3582 247.319 69.2092 248.11 70.2246 249.543"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_9"
                  d="M66.5251 254.483C67.5047 255.11 68.1076 256.284 68.0474 257.445C67.9871 258.607 67.2659 259.712 66.2267 260.234C64.3856 261.16 62.0446 260.133 60.8181 258.477C59.5917 256.821 59.2068 254.708 58.856 252.677C58.0355 254.754 57.389 256.835 57.532 259.064C57.6015 260.145 57.7942 261.241 58.31 262.194C58.8259 263.147 59.7037 263.946 60.7645 264.168C62.7135 264.575 64.6256 262.848 65.0301 260.899C65.4347 258.949 67.5117 256.212 66.5251 254.483Z"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_10"
                  d="M58.9619 261.465C59.3053 263.107 58.0257 264.833 56.3916 265.21C54.7576 265.587 52.9849 264.757 52.0055 263.395C51.0262 262.034 50.7754 260.24 51.0662 258.588C51.3571 256.937 52.1455 255.41 53.087 254.022C55.1653 253.193 57.7326 251.803 59.8108 250.973"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_11"
                  d="M114.866 223.603C156.406 223.054 197.825 214.446 236.143 198.396C224.629 157.721 208.179 113.493 191.835 78.9639C185.817 66.2511 176.679 57.4943 165.455 51.8977C154.232 46.3011 141.197 44.7042 128.802 46.6125C119.412 48.0581 110.122 51.5988 103.169 58.0737C92.6823 67.8392 88.8244 83.0227 89.0837 97.3499C89.343 111.677 99.4447 167.631 114.866 223.603Z"
                  fill="#F7CE46"
                  stroke="#F7CE46"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_12"
                  d="M181.982 87.8004C176.033 99.7803 168.044 110.744 158.463 120.077C155.949 122.526 152.827 125.031 149.349 124.551C145.442 124.013 142.942 118.993 144.867 115.55C142.4 120.178 138.143 123.565 133.491 125.986C131.68 126.929 129.466 127.651 127.649 126.72C126.494 126.127 125.727 124.95 125.344 123.709C124.961 122.468 124.915 121.152 124.871 119.855C123.376 121.382 121.798 122.591 120.034 123.8C118.519 124.839 116.821 125.779 114.983 125.785C113.146 125.79 111.193 124.556 110.983 122.731"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_13"
                  d="M186.452 129.015L186.753 130.152"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_14"
                  d="M199.88 126.584L200.181 127.721"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_15"
                  d="M197.68 143.489C194.587 143.665 194.737 148.164 195.145 150.513C195.303 151.421 195.561 152.337 196.114 153.074C196.667 153.812 197.564 154.342 198.482 154.252C199.482 154.153 200.297 153.342 200.695 152.419C201.092 151.495 201.149 150.467 201.2 149.463C201.314 147.246 201.697 144.225 198.803 143.592C198.388 143.502 198.015 143.47 197.68 143.489Z"
                  stroke="black"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g id="Group">
                  <path
                    id="Vector_16"
                    d="M108.664 322.452C93.8212 324.798 79.4161 325.58 65.4488 324.798"
                    stroke="#CCCCCC"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_17"
                    d="M74.5881 168.019C59.7563 170.456 30.0542 172.172 30.0542 172.172"
                    stroke="#CCCCCC"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_18"
                    d="M74.4078 280.849C51.7302 283.195 29.7214 283.977 8.38147 283.195"
                    stroke="#CCCCCC"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <path
                  id="Vector_19"
                  d="M89.1762 119.273C119.059 104.281 166.064 93.3978 199.688 91.7864C197.433 86.6769 195.167 81.7093 192.903 76.9261C192.073 75.1733 191.183 73.4983 190.241 71.8886C156.641 75.5998 113.699 87.3315 86.8346 102.244C87.2863 106.668 88.077 112.438 89.1762 119.273Z"
                  fill="#EB4B50"
                  stroke="#EB4B50"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </span>
        </h1>
      </div>
      <div className={styles.navbarRight}>
        {loading ? null : isLoggedIn ? (
          <>
            <span className={styles.username}>{user.username}</span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.logoutButton}
              onClick={logout}
            >
              <g id="Material Symbols Icon 2">
                <path
                  id="Vector"
                  d="M9 42C8.2 42 7.5 41.7 6.9 41.1C6.3 40.5 6 39.8 6 39V9C6 8.2 6.3 7.5 6.9 6.9C7.5 6.3 8.2 6 9 6H23.95V9H9V39H23.95V42H9ZM33.3 32.75L31.15 30.6L36.25 25.5H18V22.5H36.15L31.05 17.4L33.2 15.25L42 24.05L33.3 32.75Z"
                  fill="black"
                />
              </g>
            </svg>
          </>
        ) : (
          <>
            <button
              className={styles.loginButton}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className={styles.signupButton}
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
