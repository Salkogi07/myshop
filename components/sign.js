import styles from "./sign.module.css"
import { TextField, Fade, Button } from "@mui/material"
import { useState } from "react"

export default function Sign(){
	const [idValue,setIdValue] = useState("");
	const [pwValue,setPwValue] = useState("");
	const [userNameValue,setUserNameValue] = useState("");
	const [pwCheckValue,setPwCheckValue] = useState("");
	const [showPwField,setShowPwField] = useState(false);
	const [showPwCheckField,setShowPwCheckField] = useState(false);

	const [helpIdText,setHelpIdText] = useState("6-12자 이내 영문, 숫자 사용가능");
	const [helpPwText,setHelpPwText] = useState("8-16자 이내 영문, 숫자, 특수문자 사용가능");
	const [pwCheckHelpText,setHelpPwCheckText] = useState("8-16자 이내 영문, 숫자, 특수문자 사용가능");

	const [idError, setIdError] = useState(false);
	const [pwError, setPwError] = useState(false);
	const [pwCheckError,setPwCheckError] = useState(false);

	const handleIdChange = (event) => {
		const value = event.target.value;
		setIdValue(value);
		const regexId = /^[a-zA-Z0-9]{6,12}$/;
		if(regexId.test(value)){
			setShowPwField(true);
			setIdError(false);
			setHelpIdText("유효한 ID입니다");
		}
		else{
			setShowPwField(false);
			setIdError(true);
			setHelpIdText("6-12자 이내 영문, 숫자 사용가능.");
		}
	};

	const handlePwChange = (event) => {
		const value = event.target.value;
		setPwValue(value);
		const regexPw = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@#^?&\\(\\)\-_=+]).{8,16}$/;
		if(regexPw.test(value)){
			setShowPwCheckField(true);
			setPwError(false);
			setHelpPwText("유효한 PassWord입니다.");
		}
		else{
			setShowPwCheckField(false);
			setPwError(true);
			setHelpPwText("8-16자 이내 영문, 숫자, 특수문자 사용가능.");
		}
	};

	const handlePwCheckChange = (event) => {
		const value = event.target.value;
		setPwCheckValue(value);
		if(pwValue == value){
			setPwCheckError(false);
			setHelpPwCheckText("");
		}
		else{
			setPwCheckError(true);
			setHelpPwCheckText("PassWord가 일치하지 않습니다.");
		}
	}

	const handleUserNameChange = (event) => {
		const value = event.target.value
		if(value.length > -1){
			setUserNameValue(value)
		}
	}

	const handleSubmit = () => {
		if(!idError && !pwError && !pwCheckError && userNameValue.length > 0 && idValue.length > 0){
			alert("회원가입 완료")
		}
		else{
			alert("모든 입력란을 올바르게 채워주세요")
		}
	}

    return(
      <>
        <div className={styles.wrapper}>
					<h2 className={styles.head}>회원가입</h2>
					<div className={styles.form}>
						<TextField
							id="username-required"
							label="UserName"
							placeholder="닉네임"
							helperText="사용하실 닉네임을 입력해주세요"
							value={userNameValue}
							onChange={handleUserNameChange}
							fullWidth
						></TextField>
						<TextField
							error={idError}
							id="id-required"
							label="ID"
							placeholder="ID 입력"
							helperText={helpIdText}
							fullWidth
							value={idValue}
							onChange={handleIdChange}	
						></TextField>
						{showPwField && (
							<Fade in={showPwField} timeout={500}>
								<TextField
									error={pwError}
									id="password-required"
									label="Password"
									type="password"
									placeholder="Password 입력"
									helperText={helpPwText}
									value={pwValue}
									onChange={handlePwChange}
									fullWidth
								></TextField>
							</Fade>
						)}
						{showPwCheckField && (
							<Fade in={showPwCheckField} timeout={500}>
								<TextField
									error={pwCheckError}
									id="password-required"
									label="Password 재확인"
									type="password"
									placeholder="Password 다시 입력"
									helperText={pwCheckHelpText}
									value={pwCheckValue}
									onChange={handlePwCheckChange}
									fullWidth
								></TextField>
							</Fade>
						)}
						<Button
							variant="outlined"
							color="primary"
							fullWidth
							onClick={handleSubmit}
							style={{marginTop: '20px'}}
						>Continue</Button>
					</div>
        </div>
      </>
    )
}