import React from 'react'

function New() {
  return (
    <div>
        <form action='/pokemon' method="POST">
            Name: <input type="text" name="name" />
            <input type="submit" name="" value="Create Pokemon" />
        </form>
    </div>
  );
}

export default New