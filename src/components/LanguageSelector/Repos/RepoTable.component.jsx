import React from 'react'
import './table.styles.css'
const RepoTable = ({ repos }) =>(
    <table className="table table-hover">
        <thead className='color'>
            <tr>
                <th scope="col">Rank</th>
                <th scope="col">Repository picture</th>
                <th scope="col">Repository name</th>
                <th scope="col">Owner profile</th>
                <th scope="col">Stars</th>
            </tr>
        </thead>
        {repos.map((rep, i) => (

            <tbody>
                <tr>
                    
                    <td>#{i + 1}</td>
                    <td><img className='repoPic'
                        src={rep.owner.avatar_url}
                        alt={`avatar for ${rep.owner.login}`} /></td>
                    <td><a href={rep.html_url}>{rep.name}</a></td>
                    <td><a href={`https://github.com/${rep.owner.login}`} target=''>@{rep.owner.login}</a></td>
                    <td>⭐ {rep.stargazers_count}</td>
                </tr>
            </tbody>


        ))}
    </table>
)
export default RepoTable