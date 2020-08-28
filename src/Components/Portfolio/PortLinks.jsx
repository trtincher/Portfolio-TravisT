import React, { useState, useEffect } from 'react';
import './PortLinks.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

function PortLinks() {
	const [ data, setData ] = useState([]);
	const [ projects, setProjects ] = useState([]);
	const [ isDescription, setIsDescription ] = useState(false);

	useEffect(async () => {
		let data = await getProjects();
		console.log('data', data);
		setData(data);
		let cards = makeProjects(data);
		console.log('cards', cards);
		setProjects(cards);
	}, []);

	//sheetUrl is shared url...anyone with that url canopen the sheet in google sheets
	const sheetUrl =
		'https://docs.google.com/spreadsheets/d/1FlYxWf-DCBFPt55fm0Hyu5pLr2dgCr2RqA1LKfahF-A/edit?usp=sharing';

	//sheetAsJSON is how we will pull the data as JSON (javascript object notation)
	const sheetAsJSON =
		'https://spreadsheets.google.com/feeds/list/1FlYxWf-DCBFPt55fm0Hyu5pLr2dgCr2RqA1LKfahF-A/od6/public/values?alt=json';

	const handleDetailsClick = () => {
		console.log('handleDetailsClick');
		setIsDescription(!isDescription);
	};

	const getProjects = async () => {
		try {
			let res = await axios.get(sheetAsJSON);

			console.log('res in PortLinks', res);
			const projects = res.data.feed.entry.map((project) => {
				return {
					title: project.gsx$title.$t,
					description: project.gsx$description.$t,
					image: project.gsx$image.$t,
					url: project.gsx$url.$t,
					github: project.gsx$github.$t
				};
			});

			return projects;
		} catch (err) {
			console.error(err);
		}
	};

	const makeProjectDescription = (description) => {
		return description.split('|').map((line) => <li className="DiscriptionLine">{line}</li>);
	};

	const makeProjects = (projectsData) => {
		return projectsData.map((project) => (
			<div className="cardDiv">
				<Accordion>
					<Card style={{ width: '25rem', margin: '1rem' }}>
						<div className="cropImg">
							<Card.Img variant="top" src={`${project.image}`} />
						</div>

						<div className="header">
							<div className="headerLeft">
								<h1>{project.title}</h1>
								<Accordion.Toggle
									style={{ background: 'none', color: 'black', border: 'none' }}
									as={Button}
									eventKey="0"
								>
									<span className="projectInfoIcon">
										<i class="fas fa-info-circle" />
									</span>
								</Accordion.Toggle>
							</div>

							<a class="projectLinkIcon" href={project.url} target="_blank">
								<i class="fas fa-external-link-alt" />
							</a>
						</div>
						<Accordion.Collapse eventKey="0">
							<Card.Text style={{ fontWeight: 'bold', padding: '.5rem' }}>
								{makeProjectDescription(project.description)}
								<a class="projectLinkIcon" href={project.github} target="_blank">
									<i class="fab fa-github-square" />
									<h1>{project.github}</h1>
								</a>
							</Card.Text>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</div>
		));
	};

	return <div className="projectsContainer">{projects}</div>;
}

export default PortLinks;
