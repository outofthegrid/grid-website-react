import React from 'react';
import {Fragment, useCallback, useMemo, useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client';
import './Dashboard.css';
import articles from './reading_list_articles.json'

const all_articles = articles

// Topic tags
let article_topics = {"politics": [
        {"name": "politics",
        "main-colour": "#d2a6a6ff",
        "accent-colour": "#c66666ff",
        }
    ],
    "reading": [
        {"name": "reading",
        "main-colour": "#c1c1c1ff",
        "accent-colour": "#848484ff",
        }
    ],
    "sports": [
        {"name": "sports",
        "main-colour": "#6bba7eff",
        "accent-colour": "#579b67ff",
        }
    ],
    "data": [
        {"name": "data",
        "main-colour": "#a1cbe0ff",
        "accent-colour": "#588da3ff",
        }
    ],
    "data science": [
        {"name": "data science",
        "main-colour": "#f1e6baff",
        "accent-colour": "#d4b550ff",
        }
    ],
    "stats": [
        {"name": "stats",
        "main-colour": "#9cd2caff",
        "accent-colour": "#72b6adff",
        }
    ],
    "genai": [
        {"name": "GenAI",
        "main-colour": "#e6b8e0ff",
        "accent-colour": "#d26bbcff",
        }
    ],
    "crime": [
        {"name": "crime",
        "main-colour": "#e8e8e8ff",
        "accent-colour": "#464646ff",
        }
    ],
    "bau": [
        {"name": "BAU",
        "main-colour": "#e8e8e8ff",
        "accent-colour": "#464646ff",
        }
    ],
    "test": [
        {"name": "test",
        "main-colour": "#e8e8e8ff",
        "accent-colour": "#464646ff",
        }
    ],
}

// Article randomization
const qty_articles = articles.length
const id_article = Math.floor(Math.random() * ((qty_articles-1) - 0) + 0)
const random_article = articles[id_article]

const Dashboard = ({all_articles}) => {

    // Create topic tag
    const backgroundColor = article_topics[random_article.topic.toLowerCase()] ? article_topics[random_article.topic.toLowerCase()][0]['main-colour'] : article_topics['test'][0]['main-colour']
    
    const accentColor = article_topics[random_article.topic.toLowerCase()] ? article_topics[random_article.topic.toLowerCase()][0]['accent-colour'] : article_topics['test'][0]['accent-colour']

    return (
        <section className='dashboard'>
            <section id="main-body">
                <div id="daily-article">
                    <div className="daily-article-header">
                        <div className="daily-article-date">
                            <p>APR 4, 2026 (Saturday)</p>
                        </div>
                        <div className="daily-article-topic-tag"
                            // style={{background: backgroundColor, borderColor: accentColor}}
                            // style={{background: accentColor, borderColor: backgroundColor}}
                            style={{background: accentColor}}
                            >
                            <p>{random_article.topic}</p>
                        </div>
                    </div>
                    <a href={random_article.url}>{random_article.title}</a>
                    <p>{random_article.description}</p>
                </div>
            </section>
        </section>
    )
}

export default Dashboard