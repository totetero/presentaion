
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

import * as React from "react";

// 情報構造体
interface ComponentViewPage05Props extends React.Props<any>{
}

// 状態構造体
interface ComponentViewPage05State{
}

// コンポーネント
export default class ComponentViewPage05 extends React.Component<ComponentViewPage05Props, ComponentViewPage05State>{
	// プロパティ初期値
	static defaultProps: ComponentViewPage05Props = {
	};

	// コンストラクタ
	constructor(props: ComponentViewPage05Props){
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
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "100%",
			}}>Page05</div>
		);
	}
}

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

