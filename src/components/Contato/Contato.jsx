import React from "react";

import style from "./Contato.module.css";

export function Contato({ name, number, icon }) {
	return (
			<div className={style.list}>
				<img className={style.img} src={icon} alt="icon" />
				<div className={style.contact}>
					<p className={style.p1}>{name}</p>
					<p className={style.p2}>{number}</p>
				</div>
			</div>
	);
}
