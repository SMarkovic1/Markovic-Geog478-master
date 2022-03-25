function locateTopLeft(data)
{
    let latMax = data[0];
    let latMax2 = data[0];

    for (i = 1; i < data.length-1; i++)
    {
        if (data[i].lat > latMax.lat)
        {
            latMax = data[i];
        }
    }

    for (i = 1; i < data.length-1; i++)
    {
        if (data[i].lat > latMax2.lat && data[i].lat < latMax.lat)
        {
            latMax2 = data[i];
        }
    }


    if (latMax.lon < latMax2.lon)
    {
        return latMax;
    }
    else
    {
        return latMax2;
    }
    
}

function locateTopRight(data)
{

    let latMax = data[0];
    let latMax2 = data[0];

    for (i = 1; i < data.length-1; i++)
    {
        if (data[i].lat > latMax.lat)
        {
            latMax = data[i];
        }
    }

    for (i = 1; i < data.length-1; i++)
    {
        if (data[i].lat > latMax2.lat && data[i].lat < latMax.lat)
        {
            latMax2 = data[i];
        }
    }

    if (latMax.lon > latMax2.lon)
    {
        return latMax;
    }
    else
    {
        return latMax2;
    }
    
}

function locateBottomLeft(data)
{
    let latMin = data[0];
    let latMin2 = data[0];

    for (i = 1; i < data.length-1; i++)
    {
        if (data[i].lat < latMin.lat)
        {
            latMin = data[i];
        }
    }

    for (i = 1; i < data.length-1; i++)
    {
        if (data[i].lat < latMin2.lat && data[i].lat > latMin.lat)
        {
            latMin2 = data[i];
        }
    }


    if (latMin.lon < latMin2.lon)
    {
        return latMin;
    }
    else
    {
        return latMin2;
    }
    
}

function locateBottomRight(data)
{
    let latMin = data[0];
    let latMin2 = data[0];

    for (i = 1; i < data.length-1; i++)
    {
        if (data[i].lat < latMin.lat)
        {
            latMin = data[i];
        }
    }

    for (i = 1; i < data.length-1; i++)
    {
        if (data[i].lat < latMin2.lat && data[i].lat > latMin.lat)
        {
            latMin2 = data[i];
        }
    }

    if (latMin.lon > latMin2.lon)
    {
        return latMin;
    }
    else
    {
        return latMin2;
    }
    
}

function Run()
{
   let data = theJSON.data;
   let topLeft = locateTopLeft(data);
   let topRight = locateTopRight(data);
   let bottomLeft = locateBottomLeft(data);
   let bottomRight = locateBottomRight(data);

   let boundingBox = 
   {
       topLeft: topLeft,
       topRight: topRight,
       bottomLeft: bottomLeft,
       bottomRight: bottomRight
   }

   console.log("Bounding box computed for zastavo@tamu.edu: ")
   console.log(boundingBox);

}

//I could NOT get forEach to work. It was really difficult to grab from the different columns, and all of the examples I saw on stackoverflow were working with a single column...
//got too confused and spent too much time on it before finding a thread about for/if. Could you share the code to get forEach to work? It felt more compact than this for sure. 