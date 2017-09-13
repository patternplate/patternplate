import React from 'react';

export default Lightbox;

function Lightbox(props) {
	return (
		<div className="lightbox">
			{
				props.backdrop && <div className="lightbox__backdrop"/>
			}
			<div className="lightbox__container">
				<div className="lightbox__title">
					<h3 className="h h3">
						{props.title}
					</h3>
				</div>
				<div className="lightbox__children">
					{props.children}
				</div>
				<div className="lightbox__button-row">
					{props.buttons}
				</div>
			</div>
		</div>
	);
}

