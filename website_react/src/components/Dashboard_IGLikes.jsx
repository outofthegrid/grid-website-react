import React from 'react';
import {Fragment, useCallback, useMemo, useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client';
import { InstagramEmbed } from 'react-social-media-embed';
import './Dashboard_IGLikes.css';
import iglikes from './iglikes_list_links.json'

const all_iglikes = iglikes
const iglikes_knitting = all_iglikes.filter(iglike => iglike.category === 'Knitting');
const iglike_random = iglikes_knitting.slice(0,5)

const Dashboard_IGLikes = ({all_iglikes}) => {

    // Get list of 
    // const backgroundColor = article_topics[random_article.topic.toLowerCase()] ? article_topics[random_article.topic.toLowerCase()][0]['main-colour'] : article_topics['test'][0]['main-colour']
    
    // const accentColor = article_topics[random_article.topic.toLowerCase()] ? article_topics[random_article.topic.toLowerCase()][0]['accent-colour'] : article_topics['test'][0]['accent-colour']

    return (
        <section className='dashboard_iglikes'>
            <section id="main-body">
                <div id="iglikes-topic-section">
                    <h1>Knitting</h1>
                    <div id="iglikes-topic-subsection">
                        <div id="iglikes-post">
                            <InstagramEmbed url={iglikes_knitting[0].href} height={'460px'}/>
                        </div>
                        <div id="iglikes-post">
                            <InstagramEmbed url={iglikes_knitting[1].href} height={'460px'}/>
                        </div>
                        <div id="iglikes-post">
                            <InstagramEmbed url={iglikes_knitting[2].href} height={'460px'}/>
                        </div>
                        <div id="iglikes-post">
                            <InstagramEmbed url={iglikes_knitting[3].href} height={'460px'}/>
                        </div>
                    </div>

                    {/* <h1>Productivity</h1>
                    <div id="iglikes-topic-subsection">
                        <div id="iglikes-post-static">
                            <iframe src="https://www.instagram.com/p/DP6fOshAAok/embed/" height="400px" allowtransparency="true" allowfullscreen="false">Iframe not supported</iframe>
                        </div>
                        <div id="iglikes-post-static">
                            <iframe src="https://www.instagram.com/p/DSIvZYqjy-V/embed/" height="400px" allowtransparency="true" allowfullscreen="false">Iframe not supported</iframe>
                        </div>
                        <div id="iglikes-post-static">
                            <iframe src="https://www.instagram.com/p/DS28XuCEd80/embed/" height="400px" allowtransparency="true" allowfullscreen="false">Iframe not supported</iframe>
                        </div>
                    </div>

                    

                    <h1>Food</h1>
                    <div id="iglikes-topic-subsection">
                        <div id="iglikes-post-static">
                            <iframe src="https://www.instagram.com/p/DSu31bAEXRj/embed/" allowtransparency="true" allowfullscreen="false">Iframe not supported</iframe>
                        </div>
                        <div id="iglikes-post-static">
                            <iframe src="https://www.instagram.com/p/DPq6xn2ETIR/embed/" height="400px" allowtransparency="true" allowfullscreen="false">Iframe not supported</iframe>
                        </div>
                        <div id="iglikes-post-static">
                            <iframe src="https://www.instagram.com/p/DOs23sPk8g0/embed/" height="400px" allowtransparency="true" allowfullscreen="false">Iframe not supported</iframe>
                        </div>
                    </div> */}
                </div>
            </section>
        </section>
    )
}

export default Dashboard_IGLikes