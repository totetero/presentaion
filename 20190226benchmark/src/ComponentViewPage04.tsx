
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

import * as React from "react";

// 情報構造体
interface ComponentViewPage04Props extends React.Props<any>{
}

// 状態構造体
interface ComponentViewPage04State{
}

// コンポーネント
export default class ComponentViewPage04 extends React.Component<ComponentViewPage04Props, ComponentViewPage04State>{
	// プロパティ初期値
	static defaultProps: ComponentViewPage04Props = {
	};

	// コンストラクタ
	constructor(props: ComponentViewPage04Props){
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
					やりかた 2/2
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
						うえおあい
					</div>
					<div style={{
						flexGrow: 1,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
						くけこかき
					</div>
				</div>
			</div>
		);
	}
}

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

