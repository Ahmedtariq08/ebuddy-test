interface IconProps {
    width?: number;
    height?: number;
    classes?: string;
}

const defaults = {
    width: 20,
    height: 20,
};

export const ThemeIcon = (props: IconProps) => {
    const { width = defaults.width, height = defaults.height } = props;
    return (
        <svg
            className={`fill-current ${props.classes}`}
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Zm1-13V1c0-.55-.45-1-1-1s-1,.45-1,1v3c0,.55,.45,1,1,1s1-.45,1-1Zm0,19v-3c0-.55-.45-1-1-1s-1,.45-1,1v3c0,.55,.45,1,1,1s1-.45,1-1ZM5,12c0-.55-.45-1-1-1H1c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1Zm19,0c0-.55-.45-1-1-1h-3c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1ZM6.71,6.71c.39-.39,.39-1.02,0-1.41l-2-2c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l2,2c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm14,14c.39-.39,.39-1.02,0-1.41l-2-2c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l2,2c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-16,0l2-2c.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0l-2,2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29ZM18.71,6.71l2-2c.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0l-2,2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Z" />
        </svg>
    );
};

export const SignInIcon = (props: IconProps) => {
    const { width = defaults.width, height = defaults.height } = props;
    return (
        <svg
            className={`fill-current ${props.classes}`}
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <path d="m16,23.314c-1.252.444-2.598.686-4,.686s-2.748-.242-4-.686v-2.314c0-2.206,1.794-4,4-4s4,1.794,4,4v2.314ZM12,7c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm12,5c0,4.433-2.416,8.311-6,10.389v-1.389c0-3.309-2.691-6-6-6s-6,2.691-6,6v1.389C2.416,20.311,0,16.433,0,12,0,5.383,5.383,0,12,0s12,5.383,12,12Zm-8-3c0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4,4-1.794,4-4Z" />
        </svg>
    );
};

export const WheelIcon = (props: IconProps) => {
    const { width = defaults.width, height = defaults.height } = props;
    return (
        <svg
            className={`fill-current ${props.classes}`}
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <path d="m22.996,10.997h-.042c-.208-2.284-1.116-4.368-2.508-6.036l.035-.035c.39-.391.39-1.024-.002-1.414-.389-.391-1.023-.391-1.414,0l-.034.034c-1.669-1.39-3.754-2.296-6.038-2.502v-.046c0-.552-.448-.999-1-.999h0c-.552,0-1,.449-.999,1.001v.046c-2.283.208-4.366,1.116-6.033,2.508l-.038-.038c-.392-.391-1.024-.391-1.414,0-.391.391-.39,1.024,0,1.414l.038.038c-1.389,1.668-2.295,3.751-2.501,6.034h-.05c-.552,0-1,.448-1,1s.448,1,1,1h.05c.207,2.282,1.114,4.365,2.505,6.032l-.038.038c-.391.391-.391,1.024,0,1.414.195.195.451.293.707.293s.512-.098.707-.293l.038-.038c1.667,1.391,3.751,2.298,6.034,2.504v.046c0,.552.448,1,1,1s1-.448,1-1v-.046c2.284-.207,4.369-1.114,6.036-2.505l.034.034c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.024,0-1.414l-.034-.034c1.391-1.668,2.298-3.753,2.504-6.038h.043c.552,0,.999-.448.999-1s-.448-1-1-1Zm-2.052,0l-4.044.002c-.13-.637-.382-1.231-.73-1.755l2.857-2.861c1.037,1.295,1.724,2.881,1.917,4.615Zm-3.333-6.029l-2.856,2.861c-.525-.348-1.118-.599-1.756-.729l-.004-4.045c1.734.192,3.321.878,4.616,1.914Zm-6.616-1.912l.004,4.044c-.637.13-1.231.382-1.755.73l-2.861-2.856c1.294-1.037,2.88-1.724,4.613-1.918Zm-6.026,3.333l2.861,2.856c-.348.525-.599,1.118-.729,1.755l-4.045.002c.192-1.733.878-3.319,1.913-4.613Zm-1.912,6.613l4.044-.002c.13.637.382,1.231.729,1.755l-2.858,2.859c-1.036-1.294-1.723-2.88-1.915-4.612Zm7.943,7.942c-1.733-.193-3.319-.879-4.614-1.915l2.858-2.859c.525.348,1.118.6,1.756.73v4.045Zm1-5.944c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Zm1,5.944v-4.045c.638-.13,1.231-.382,1.756-.73l2.859,2.858c-1.295,1.037-2.882,1.724-4.615,1.916Zm6.029-3.33l-2.859-2.858c.348-.525.6-1.118.73-1.756l4.045-.002c-.192,1.734-.879,3.321-1.915,4.616Z" />
        </svg>
    );
};

export const SideBarIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
            />
        </svg>
    );
};

export const BuyCarIcon: React.FC = (props: IconProps) => {
    const { width = defaults.width, height = defaults.height } = props;
    return (
        <svg
            className={`fill-current ${props.classes}`}
            width={width}
            height={height}
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M18 0C13.515625 0 10 3.515625 10 8C10 12.484375 13.515625 16 18 16C22.484375 16 26 12.484375 26 8C26 3.515625 22.484375 0 18 0 Z M 30.40625 4C30.210938 4 30.007813 4.046875 29.84375 4.15625L28.6875 4.96875L27.5625 4.15625C27.457031 4.085938 27.34375 4.058594 27.21875 4.03125C27.730469 5.242188 28 6.582031 28 8C28 9.429688 27.707031 10.78125 27.1875 12L37 12C37.265625 12 37.53125 11.90625 37.71875 11.71875L39.71875 9.71875C39.90625 9.53125 40 9.265625 40 9L40 7C40 6.734375 39.90625 6.46875 39.71875 6.28125L37.71875 4.28125C37.53125 4.09375 37.265625 4 37 4L35.3125 4C35.046875 4 34.8125 4.09375 34.625 4.28125L33.5 5.4375L32.375 4.28125C32.1875 4.09375 31.921875 4 31.65625 4 Z M 16 6C17.105469 6 18 6.894531 18 8C18 9.105469 17.105469 10 16 10C14.894531 10 14 9.105469 14 8C14 6.894531 14.894531 6 16 6 Z M 15.6875 18C13.667969 18 11.832031 19.242188 11.09375 21.09375L8.125 28L7 28C5.347656 28 4 29.347656 4 31C4 32.652344 5.347656 34 7 34L7 47C7 48.652344 8.347656 50 10 50L13 50C14.652344 50 16 48.652344 16 47L16 46L34 46L34 47C34 48.652344 35.347656 50 37 50L40 50C41.652344 50 43 48.652344 43 47L43 34C44.652344 34 46 32.652344 46 31C46 29.347656 44.652344 28 43 28L41.875 28L38.9375 21.125C38.191406 19.253906 36.332031 18 34.3125 18 Z M 15.6875 20L34.3125 20C35.523438 20 36.636719 20.765625 37.09375 21.90625L39.90625 28.53125L38.9375 29.1875C38.152344 29.738281 37.234375 30 36.1875 30L13.8125 30C12.765625 30 11.867188 29.71875 11.0625 29.15625L10.09375 28.53125L12.9375 21.875C13.386719 20.757813 14.476563 20 15.6875 20 Z M 14.5 36C15.898438 36 17 37.101563 17 38.5C17 39.898438 15.898438 41 14.5 41C13.101563 41 12 39.898438 12 38.5C12 37.101563 13.101563 36 14.5 36 Z M 35.5 36C36.898438 36 38 37.101563 38 38.5C38 39.898438 36.898438 41 35.5 41C34.101563 41 33 39.898438 33 38.5C33 37.101563 34.101563 36 35.5 36Z" />
        </svg>
    );
};

export const SellCarIcon: React.FC = (props: IconProps) => {
    const { width = defaults.width, height = defaults.height } = props;
    return (
        <svg
            className={`fill-current ${props.classes}`}
            width={width}
            height={height}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 252 256"
        >
            <path
                d="M187.6,145.344l-18.65-44.73c-2.4-5.71-7.55-9.98-13.85-11c0.98-7.59,3.64-18.33,6.2-23.76l-4.67-4.57
   c-3.48,6.14-6.79,19.29-7.83,28.1H55.98c-7.6,0-13.99,4.66-16.76,11.23l-18.82,44.73c-10.54,2.94-18.31,12.44-18.31,24.02v52.51
   h16.23v16.06c0,8.98,7.26,16.07,16.07,16.07s16.06-7.09,16.06-16.07v-16.06h106.93v16.06c0,8.98,7.08,16.07,16.06,16.07
   c8.81,0,16.06-7.09,16.06-16.07v-16.06h16.41v-52.51C205.91,157.784,198.14,148.284,187.6,145.344z M52.7,105.794
   c0.69-1.9,2.59-3.28,4.66-3.28h93.28c2.24,0,4.14,1.38,4.84,3.28l16.06,38.69H36.63L52.7,105.794z M35.42,193.024
   c-8.98,0-16.23-7.26-16.23-16.24s7.25-16.23,16.23-16.23c8.99,0,16.24,7.25,16.24,16.23S44.41,193.024,35.42,193.024z
    M171.54,193.024c-8.98,0-16.24-7.26-16.24-16.24s7.26-16.23,16.24-16.23c8.98,0,16.24,7.25,16.24,16.23
   S180.52,193.024,171.54,193.024z M239.3,2.004l-79.75,14.37l-14.18,33.16l11.17,11.59c3.04-6.12,7.11-11.83,11.83-15.46
   c-0.03-0.12-0.05-0.24-0.07-0.36c-0.97-5.33,2.57-10.44,7.9-11.4c5.34-0.97,10.44,2.57,11.41,7.9c0.96,5.34-2.58,10.44-7.91,11.41
   c-2.97,0.54-5.86-0.32-8.02-2.11c-3.18,2.63-6.34,6.81-9.07,12.1c-0.44,0.86-0.85,1.71-1.24,2.55l9.44,9.8L250,61.094L239.3,2.004z
    M217.58,52.364l0.85,5.54l-5.29,0.81l-0.78-5.09c-3.73,0.32-7.36-0.07-9.59-0.92l0.66-6.46c2.51,0.8,5.89,1.47,9.38,0.94
   c3.01-0.46,4.92-1.94,4.57-4.23c-0.12-2.12-2.15-3-6.29-3.79c-6.06-0.97-10.41-3.13-11.23-8.47c-0.74-4.85,2.14-9.07,7.74-11.12
   l-0.78-5.05l5.3-0.81l0.74,4.85c3.73-0.32,6.16,0,8.14,0.64l-0.68,6.26c-1.51-0.46-4.22-1.24-8.14-0.63
   c-3.45,0.52-4.36,2.3-4.15,3.71c0.28,1.84,2.3,2.73,7.16,3.62c6.81,1.34,9.84,3.91,10.58,8.77
   C226.52,45.794,223.71,50.484,217.58,52.364z"
            />
        </svg>
    );
};

export const CarMaintenanceIcon = (props: IconProps) => {
    const { width = defaults.width, height = defaults.height } = props;
    return (
        <svg
            className={`fill-current ${props.classes}`}
            width={width}
            height={height}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 208 256"
        >
            <path
                d="M50.452,221.871v16.064c0,8.982-7.255,16.064-16.064,16.064s-16.064-7.082-16.064-16.064v-16.064H2.086v-52.512l0,0
   c0-11.573,7.773-21.074,18.31-24.01l18.828-44.739c2.764-6.564,9.155-11.228,16.755-11.228h96.214c7.6,0,13.992,4.664,16.755,11.228
   l18.656,44.739c10.537,2.937,18.31,12.437,18.31,24.01l0,0v52.512h-16.41v16.064c0,8.982-7.255,16.064-16.064,16.064
   c-8.982,0-16.064-7.082-16.064-16.064v-16.064H50.452z M35.424,193.024c8.982,0,16.237-7.255,16.237-16.237
   c0-8.982-7.255-16.237-16.237-16.237s-16.237,7.255-16.237,16.237S26.441,193.024,35.424,193.024 M187.777,176.787
   c0-8.982-7.255-16.237-16.237-16.237c-8.982,0-16.237,7.255-16.237,16.237s7.255,16.237,16.237,16.237
   C180.522,193.024,187.777,185.769,187.777,176.787 M171.54,144.485l-16.064-38.693c-0.691-1.9-2.591-3.282-4.837-3.282H57.361
   c-2.073,0-3.973,1.382-4.664,3.282l-16.064,38.693H171.54z M33.867,46.68h93.989c0.558,0,1.107-0.037,1.648-0.102
   c5.056,10.105,15.497,17.047,27.565,17.047c13.041,0,24.182-8.106,28.68-19.551h-28.68V21.551h28.68
   C181.252,10.106,170.112,2,157.07,2c-12.068,0-22.509,6.942-27.565,17.047c-0.541-0.065-1.091-0.102-1.648-0.102H33.867
   C26.24,18.945,20,25.185,20,32.812v0C20,40.439,26.24,46.68,33.867,46.68z"
            />
        </svg>
    );
};

export const FaqIcon = (props: IconProps) => {
    const { width = defaults.width, height = defaults.height } = props;
    return (
        <svg
            className={`fill-current ${props.classes}`}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12,22A10,10,0,1,0,2,12,10,10,0,0,0,12,22Zm0-2a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,20ZM8,8.994a3.907,3.907,0,0,1,2.319-3.645,4.061,4.061,0,0,1,3.889.316,4,4,0,0,1,.294,6.456,3.972,3.972,0,0,0-1.411,2.114,1,1,0,0,1-1.944-.47,5.908,5.908,0,0,1,2.1-3.2,2,2,0,0,0-.146-3.23,2.06,2.06,0,0,0-2.006-.14,1.937,1.937,0,0,0-1.1,1.8A1,1,0,0,1,8,9Z" />
        </svg>
    );
};

export const AboutIcon = (props: IconProps) => {
    const { width = defaults.width, height = defaults.height } = props;
    return (
        <svg
            className={`fill-current ${props.classes}`}
            width={width}
            height={height}
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M213.333333,3.55271368e-14 C331.154987,3.55271368e-14 426.666667,95.51168 426.666667,213.333333 C426.666667,331.153707 331.154987,426.666667 213.333333,426.666667 C95.51296,426.666667 3.55271368e-14,331.153707 3.55271368e-14,213.333333 C3.55271368e-14,95.51168 95.51296,3.55271368e-14 213.333333,3.55271368e-14 Z M234.713387,192 L192.04672,192 L192.04672,320 L234.713387,320 L234.713387,192 Z M213.55008,101.333333 C197.99616,101.333333 186.713387,112.5536 186.713387,127.704107 C186.713387,143.46752 197.698773,154.666667 213.55008,154.666667 C228.785067,154.666667 240.04672,143.46752 240.04672,128 C240.04672,112.5536 228.785067,101.333333 213.55008,101.333333 Z"
                id="Shape"
            ></path>
        </svg>
    );
};

export const CrossIcon = (props: IconProps) => {
    const { width = defaults.width, height = defaults.height } = props;
    return (
        <svg
            className={`fill-current ${props.classes}`}
            width={width}
            height={height}
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M591.657,1109.24 C592.048,1109.63 592.048,1110.27 591.657,1110.66 C591.267,1111.05 590.633,1111.05 590.242,1110.66 L586.006,1106.42 L581.74,1110.69 C581.346,1111.08 580.708,1111.08 580.314,1110.69 C579.921,1110.29 579.921,1109.65 580.314,1109.26 L584.58,1104.99 L580.344,1100.76 C579.953,1100.37 579.953,1099.73 580.344,1099.34 C580.733,1098.95 581.367,1098.95 581.758,1099.34 L585.994,1103.58 L590.292,1099.28 C590.686,1098.89 591.323,1098.89 591.717,1099.28 C592.11,1099.68 592.11,1100.31 591.717,1100.71 L587.42,1105.01 L591.657,1109.24 L591.657,1109.24 Z M586,1089 C577.163,1089 570,1096.16 570,1105 C570,1113.84 577.163,1121 586,1121 C594.837,1121 602,1113.84 602,1105 C602,1096.16 594.837,1089 586,1089 L586,1089 Z"
                id="cross-circle"
            ></path>
        </svg>
    );
};

export const EmailIcon = (props: IconProps) => {
    const { width = defaults.width, height = defaults.height } = props;
    return (
        <svg
            className={`fill-current ${props.classes}`}
            width={width}
            height={height}
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" />
        </svg>
    );
};

export const LockIcon = (props: IconProps) => {
    const { width = defaults.width, height = defaults.height } = props;
    return (
        <svg
            className={`fill-current ${props.classes}`}
            width={width}
            height={height}
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M39,18H35V13A11,11,0,0,0,24,2H22A11,11,0,0,0,11,13v5H7a2,2,0,0,0-2,2V44a2,2,0,0,0,2,2H39a2,2,0,0,0,2-2V20A2,2,0,0,0,39,18ZM15,13a7,7,0,0,1,7-7h2a7,7,0,0,1,7,7v5H15ZM37,42H9V22H37Z" />
        </svg>
    );
};

export const GoogleIcon = (props: IconProps) => {
    const { width = defaults.width, height = defaults.height } = props;
    return (
        <svg
            // className={`fill-current ${props.classes}`}
            width={width}
            height={height}
            viewBox="-0.5 0 48 48"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Google-color</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Icons" stroke="none" fill="none">
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                    <g id="Google" transform="translate(401.000000, 860.000000)">
                        <path
                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                            id="Fill-1"
                            fill="#FBBC05"
                        ></path>
                        <path
                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                            id="Fill-2"
                            fill="#EB4335"
                        ></path>
                        <path
                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                            id="Fill-3"
                            fill="#34A853"
                        ></path>
                        <path
                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                            id="Fill-4"
                            fill="#4285F4"
                        ></path>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export const ClosedEyeIcon = (props: IconProps) => {
    const { width = defaults.width, height = defaults.height } = props;
    return (
        <svg
            className={`fill-current ${props.classes}`}
            width={width}
            height={height}
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M18.703 22.418c-4.987 1.227-9.906-0.881-15.022-6.417 1.227-1.344 2.555-2.553 3.985-3.633l0.073-0.053c0.311-0.23 0.511-0.596 0.511-1.008 0-0.69-0.56-1.25-1.25-1.25-0.278 0-0.535 0.091-0.743 0.244l0.003-0.002c-1.94 1.469-3.644 3.071-5.165 4.835l-0.036 0.043c-0.192 0.219-0.31 0.507-0.31 0.823s0.117 0.605 0.311 0.825l-0.001-0.001c4.903 5.604 9.917 8.427 14.948 8.427 1.169-0.002 2.302-0.149 3.385-0.423l-0.096 0.021c0.552-0.139 0.953-0.63 0.953-1.216 0-0.105-0.013-0.207-0.037-0.305l0.002 0.009c-0.145-0.551-0.638-0.951-1.226-0.951-0.102 0-0.2 0.012-0.295 0.035l0.009-0.002zM17.25 20c-0-0.69-0.56-1.25-1.25-1.25h-0c-1.518-0.002-2.748-1.232-2.75-2.75v-0c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0c0.004 2.898 2.352 5.246 5.25 5.25h0c0.69-0 1.25-0.56 1.25-1.25v-0zM24.372 22.603c2.513-1.651 4.675-3.561 6.535-5.738l0.035-0.042c0.192-0.219 0.309-0.507 0.309-0.823s-0.117-0.604-0.31-0.825l0.001 0.001c-6.911-7.893-13.98-10.246-21.028-7.032l-7.029-7.029c-0.226-0.225-0.537-0.363-0.881-0.363-0.69 0-1.25 0.56-1.25 1.25 0 0.344 0.139 0.655 0.363 0.881l27.999 28.001c0.226 0.226 0.539 0.366 0.884 0.366 0.691 0 1.251-0.56 1.251-1.251 0-0.345-0.14-0.658-0.366-0.884l0 0zM28.318 16c-1.661 1.843-3.558 3.428-5.653 4.721l-0.111 0.064-2.076-2.076c0.482-0.771 0.768-1.706 0.771-2.709v-0.001c-0.004-2.898-2.352-5.246-5.25-5.25h-0c-1.003 0.003-1.939 0.29-2.732 0.785l0.022-0.013-1.467-1.467c5.474-2.061 10.894-0.115 16.496 5.945zM15.18 13.412c0.242-0.091 0.522-0.149 0.814-0.162l0.005-0c0.029-0.001 0.063-0.002 0.097-0.002 1.466 0 2.655 1.189 2.655 2.655 0 0.329-0.060 0.644-0.169 0.935l0.006-0.018z"></path>
        </svg>
    );
};

export const OpenEyeIcon = (props: IconProps) => {
    const { width = defaults.width, height = defaults.height } = props;
    return (
        <svg
            width={width}
            height={height}
            className={`fill-current ${props.classes}`}
            viewBox="0 0 24 24"
            // fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_1237_357558)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9999 7.5C9.5146 7.5 7.49988 9.51472 7.49988 12C7.49988 14.4853 9.5146 16.5 11.9999 16.5C14.4852 16.5 16.4999 14.4853 16.4999 12C16.4999 9.51472 14.4852 7.5 11.9999 7.5ZM9.49988 12C9.49988 10.6193 10.6192 9.5 11.9999 9.5C13.3806 9.5 14.4999 10.6193 14.4999 12C14.4999 13.3807 13.3806 14.5 11.9999 14.5C10.6192 14.5 9.49988 13.3807 9.49988 12Z"
                    className={`fill-current ${props.classes}`}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9998 2.5C7.80917 2.5 4.80627 4.84327 2.90279 7.0685C1.94654 8.18638 1.24425 9.29981 0.780854 10.1325C0.548544 10.55 0.374643 10.8998 0.257542 11.1484C0.198955 11.2727 0.154474 11.372 0.123909 11.4419C0.108623 11.4769 0.0968071 11.5046 0.0884377 11.5245L0.0784618 11.5483L0.0754044 11.5557L0.0743572 11.5583L0.0739539 11.5593L-0.0742188 11.9233L0.0645713 12.291L0.0649583 12.292L0.0659593 12.2947L0.0688703 12.3023L0.0783443 12.3266C0.0862884 12.3469 0.0975008 12.3751 0.112024 12.4107C0.141064 12.482 0.183381 12.583 0.23932 12.7095C0.351123 12.9623 0.517779 13.318 0.742125 13.7424C1.1896 14.5889 1.87305 15.7209 2.8177 16.8577C4.70134 19.1243 7.7068 21.5 11.9998 21.5C16.2929 21.5 19.2983 19.1243 21.182 16.8577C22.1266 15.7209 22.8101 14.5889 23.2576 13.7424C23.4819 13.318 23.6486 12.9623 23.7604 12.7095C23.8163 12.583 23.8586 12.482 23.8877 12.4107C23.9022 12.3751 23.9134 12.3469 23.9213 12.3266L23.9308 12.3023L23.9337 12.2947L23.9347 12.292L23.9351 12.291L24.0739 11.9233L23.9257 11.5593L23.9243 11.5557L23.9212 11.5483L23.9112 11.5245C23.9029 11.5046 23.8911 11.4769 23.8758 11.4419C23.8452 11.372 23.8007 11.2727 23.7421 11.1484C23.625 10.8998 23.4511 10.55 23.2188 10.1325C22.7554 9.29981 22.0531 8.18638 21.0969 7.0685C19.1934 4.84327 16.1905 2.5 11.9998 2.5ZM22.9998 11.9371C23.9354 12.2902 23.9351 12.291 23.9351 12.291L22.9998 11.9371ZM23.9257 11.5593C23.9257 11.5593 23.926 11.5601 22.9998 11.9371L23.9257 11.5593ZM0.99984 11.9371C0.0736306 11.5601 0.0739539 11.5593 0.0739539 11.5593L0.99984 11.9371ZM0.0645713 12.291C0.0645713 12.291 0.0642597 12.2902 0.99984 11.9371L0.0645713 12.291ZM2.51028 12.8077C2.32519 12.4576 2.18591 12.1632 2.09065 11.9504C2.19077 11.7404 2.33642 11.4501 2.52847 11.105C2.94543 10.3558 3.57456 9.35995 4.4226 8.36857C6.12769 6.37527 8.62479 4.5 11.9998 4.5C15.3749 4.5 17.872 6.37527 19.5771 8.36857C20.4251 9.35995 21.0542 10.3558 21.4712 11.105C21.6633 11.4501 21.8089 11.7404 21.909 11.9504C21.8138 12.1632 21.6745 12.4576 21.4894 12.8077C21.0881 13.5667 20.4781 14.5754 19.6438 15.5794C17.9694 17.5942 15.4749 19.5 11.9998 19.5C8.52477 19.5 6.03023 17.5942 4.3559 15.5794C3.52156 14.5754 2.91153 13.5667 2.51028 12.8077Z"
                    className={`fill-current ${props.classes}`}
                />
            </g>
            <defs>
                <clipPath id="clip0_1237_357558">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
