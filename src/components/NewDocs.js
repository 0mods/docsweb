import { useEffect } from 'react';

const ToBeta = ({ url }) => {
  useEffect(() => {
    const link = 'https://beta.0mods.team/ru-RU/docs/Legacy/hollowengine/'+url;
    alert('Читай актуальны доки, а не эту парашу :)')
    window.history.pushState(null, null, link);
    window.location.href = link;
    console.log('Open beta docs from link: '+link)
  }, [url])
  return null;
}
export default ToBeta;