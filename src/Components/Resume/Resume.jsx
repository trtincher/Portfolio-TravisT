import React, { useState, useEffect } from 'react';
import './Resume.css';

function Resume({ isResume }) {
	const [ name, setName ] = useState('close');

	useEffect(
		() => {
			if (isResume) {
				setName('open');
			} else {
				setName('close');
			}
		},
		[ isResume ]
	);

	return (
		<div id="resume" className={name}>
			<ul>
				<li>
					<a
						href="https://docs.google.com/document/d/1pTE53GfARoxQENDhWKT-X9_loeH5c4iANQr0UcxmQnU/edit?usp=sharing"
						target="_blank"
					>
						Download
					</a>
				</li>
				<li>
					<a
						href="https://docs.google.com/document/d/e/2PACX-1vSOg5TLbII4JHP4ENr5WM0y4k-lTpLFeZDcbG9NrrE23NNxLP_hkOhoY34yTuxxQtOWnoMx5oiTw_ek/pub"
						target="_blank"
					>
						View
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Resume;
