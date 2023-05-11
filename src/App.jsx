import style from "./App.module.css";

import { CardPerson } from "./components/CardPerson/CardPerson";
import { Contato } from "./components/Contato/Contato";
import { Cabecalho } from "./components/Cabeçalho/Cabecalho";

export function App() {
	const listStack = [
		{ Tec: "JavaScript",},
		{ Tec: "HTML",},
		{ Tec: "CSS",},
		{ Tec: "Typescript"},
		{ Tec: "React"},
	];

	return (
		<div className={style.container}>
			<CardPerson
				cover="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=50"
				avatar="vitinho.png"
				name="Vitor Ames"
				office="Estudante de TI"
				stacks={listStack}
			/>
			<div>
				<div>
					<Cabecalho />
				</div>
				<div>
					<div>
						
						<h1 className={style.letra} style={{ backgroundColor: "#07847E" }}>
							A
						</h1>
						<Contato
							name="Ayrton Senna"
							number="(34) 1960-1994"
							email="ayrton.senna@example.com"
							icon="https://tm.ibxk.com.br/2015/10/10/10082938776016.jpg"
						/>

						<h1 className={style.letra} style={{ backgroundColor: "#633BBC" }}>
							B
						</h1>
						
						<Contato
							name="Bruce Wayne"
							number="(55) 9968-5472"
							email="bat.man@example.com"
							icon="https://upload.wikimedia.org/wikipedia/en/1/19/Bruce_Wayne_%28The_Dark_Knight_Trilogy%29.jpg"
						/>

						<h1 className={style.letra} style={{ backgroundColor: "#9A00B3" }}>
							C
						</h1>

						<Contato
							name="Cristiano Ronaldo"
							number="(38) 1985-2023"
							email="cristiano.ronaldo@example.com"
							icon="https://i.pinimg.com/736x/6a/7c/b1/6a7cb1f2ed5898d34418c50651ec3bf8.jpg"
						/>

						<h1 className={style.letra} style={{ backgroundColor: "#080238da" }}>
							G
						</h1>
						
						<Contato
							name="Giuseppe Cadura"
							number="(25) 9965-3030"
							email="giuseppe.cadura@example.com"
							icon="https://pbs.twimg.com/profile_images/1289324739794735104/mQoHcZfq_400x400.jpg"
						/>

					</div>
				</div>
			</div>
		</div>
	);
}
