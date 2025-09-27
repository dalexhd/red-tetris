export enum PlayerStatus {
	WATHING,
	PLAYING
}

export enum PlayerRole {
	HOST,
	PLAYER,
	ESPECTATOR
}

export interface Player {
	name: string;
	status: keyof typeof PlayerStatus;
	role: keyof typeof PlayerRole;
}

export enum GameStatus {
	PAUSED,
	RUNNING,
	WAITING_LOBBY
}

export interface GameSingleScore extends Pick<Player, "name"> {
	score: number
}

export interface Info {
	status: keyof typeof GameStatus;
	scores: GameSingleScore[];
	properties: {
		height: number;
		width: number;
		background: `rgb(${number}, ${number}, ${number})`
	}
}

export interface Game {
	room: string;
	players: Player[];
	info: Info
}