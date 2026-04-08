import React from 'react';
import {Fragment, useCallback, useMemo, useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client';
import './Dashboard.css';
import articles from './reading_list_articles.json'

const articles2 = articles

const qty_articles = articles.length
const id_article = Math.floor(Math.random() * ((qty_articles-1) - 0) + 0)

const Dashboard = (articles2) => {
  return (
    <section className='dashboard'>
        <section id="main-body">
            <div id="daily-article">
                <div id="daily-article-date">
                    <p>APR 4, 2026 (Saturday)</p>
                </div>
                {articles.slice(id_article, id_article+1).map((article) => (
                    <a href="{article.url}">{article.title}</a>
                    // <h4>{article.title}</h4>
                    // <h4>{id_article}</h4>
                ))}
                {articles.slice(id_article, id_article+1).map((article) => (
                    <p>{article.description}</p>
                ))}
            </div>
        </section>
    </section>
  )
}

export default Dashboard