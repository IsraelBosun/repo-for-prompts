<h1 style="text-align: center;">AI Prompts Vault</h1>

<p style="text-align: center;">
  A website built with Next.js and MongoDB for storing and reusing AI prompts, with authentication using Google Sign-In. Users can create, update, and delete prompts while other visitors can view and explore them.
</p>

<h2>Table of Contents</h2>

<ul>
  <li><a href="#description">Description</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#prerequisites">Prerequisites</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#environment-variables">Environment Variables</a></li>
  <li><a href="#technologies">Technologies</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
</ul>

<h2 id="description">Description</h2>

<p>
  AI Prompts Vault is a web application developed using Next.js and MongoDB. It allows users to store their AI prompts securely and easily reuse them in the future. Visitors to the website can also explore and view the prompts shared by other users. Authentication is implemented using Google Sign-In functionality provided by NextAuth.
</p>

<p>
  The application consists of four main pages:
</p>

<ul>
  <li>
    <strong>Main Page</strong>: Users can view and browse prompts saved by others.
  </li>
  <li>
    <strong>Create Prompt Page</strong>: Users can create their own AI prompts.
  </li>
  <li>
    <strong>Update Prompt Page</strong>: Users can update their existing prompts by editing or deleting them.
  </li>
  <li>
    <strong>Profile Page</strong>: Users can view all of their saved prompts.
  </li>
</ul>

<p>
  The app is styled using Tailwind CSS to provide a clean and responsive user interface.
</p>

<h2 id="features">Features</h2>

<ul>
  <li>Store and manage AI prompts securely.</li>
  <li>Reuse prompts easily for future reference.</li>
  <li>View and explore prompts created by other users.</li>
  <li>Authenticate using Google Sign-In.</li>
  <li>Create, update, and delete prompts.</li>
  <li>Responsive and intuitive user interface.</li>
</ul>

<h2 id="prerequisites">Prerequisites</h2>

<p>
  To run this project locally, you will need the following:
</p>

<ul>
  <li><a href="https://nodejs.org">Node.js</a> installed on your machine.</li>
  <li>A MongoDB database to connect to.</li>
  <li>API keys and credentials from Google Sign-In and NextAuth.</li>
</ul>

<h2 id="installation">Installation</h2>

<ol>
  <li>Clone this repository to your local machine.</li>
  <li>Navigate to the project's root directory.</li>
  <li>Install the required dependencies by running the following command:</li>
</ol>

<pre><code>npm install</code></pre>

<h2 id="usage">Usage</h2>

<ol>
  <li>Create a <code>.env</code> file in the project's root directory.</li>
  <li>Add the following environment variables to the <code>.env</code> file:</li>
</ol>

<pre><code>GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGODB_URL=your_mongodb_connection_url
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret</code></pre>

<ol start="3">
  <li>Run the project locally using the following command:</li>
</ol>

<pre><code>npm run dev</code></pre>

<ol start="4">
  <li>Access the application by visiting <code>http://localhost:3000</code> in your browser.</li>
</ol>

<h2 id="environment-variables">Environment Variables</h2>

<table>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GOOGLE_CLIENT_ID</td>
      <td>API client ID obtained from Google Sign-In</td>
    </tr>
    <tr>
      <td>GOOGLE_CLIENT_SECRET</td>
      <td>API client secret obtained from Google Sign-In</td>
    </tr>
    <tr>
      <td>MONGODB_URL</td>
      <td>URL of the MongoDB database</td>
    </tr>
    <tr>
      <td>NEXTAUTH_URL</td>
      <td>Base URL of the application (e.g., <code>http://localhost:3000</code>)</td>
    </tr>
    <tr>
      <td>NEXTAUTH_SECRET</td>
      <td>Secret key for NextAuth authentication</td>
    </tr>
  </tbody>
</table>

<h2 id="technologies">Technologies</h2>

<ul>
  <li><a href="https://nextjs.org">Next.js</a> - React framework for server-side rendering and static site generation.</li>
  <li><a href="https://www.mongodb.com">MongoDB</a> - NoSQL database for storing and managing data.</li>
  <li><a href="https://next-auth.js.org">NextAuth.js</a> - Authentication library for Next.js applications.</li>
  <li><a href="https://tailwindcss.com">Tailwind CSS</a> - Utility-first CSS framework for styling.</li>
</ul>

<h2 id="contributing">Contributing</h2>

<p>
  Contributions to AI Prompts Vault are welcome! If you have any suggestions, enhancements, or bug fixes, please open an issue or submit a pull request.
</p>

<h2 id="license">License</h2>

<p>
  This project is licensed under the <a href="LICENSE">MIT License</a>.
</p>
