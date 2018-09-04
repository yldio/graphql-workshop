<Query query={QUERY}>
  {({ loading, error, data }) => {
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
      {
        data.speakers.map(speaker => (
          <li key={speaker.id}>
            <img src={speaker.photo} alt={speaker.name} />
            {speaker.name}
          </li>
        ))
      }
    );
  }}
</Query>
