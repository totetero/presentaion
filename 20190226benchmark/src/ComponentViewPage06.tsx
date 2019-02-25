
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

import * as React from "react";

// 情報構造体
interface ComponentViewPage06Props extends React.Props<any>{
}

// 状態構造体
interface ComponentViewPage06State{
}

// コンポーネント
export default class ComponentViewPage06 extends React.Component<ComponentViewPage06Props, ComponentViewPage06State>{
	// プロパティ初期値
	static defaultProps: ComponentViewPage06Props = {
	};

	// コンストラクタ
	constructor(props: ComponentViewPage06Props){
		super(props);
		// 状態設定
		this.state = {
		};
	}

	// レンダー
	public render(): JSX.Element{
		return(
			<div style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				height: "100%",
			}}>
				<div style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "50px",
				}}>
					結論
				</div>
				<div style={{
					flexGrow: 1,
					display: "flex",
				}}>
					<div style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "50%",
					}}>
						おあいうえ
					</div>
					<div style={{
						flexGrow: 1,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
						こかきくけ
					</div>
				</div>
			</div>
		);
	}
}

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

