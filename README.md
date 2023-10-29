# Summer-Project
# Irregular Polygon Subdivider for Farmer Use Case

# PROBLEM  STATEMENT
Design and implement an algorithm or software solution that can subdivide irregularly shaped fields (represented as polygons) into smaller sections based on user-defined parameters. The solution should provide an efficient and automated way for farmers to divide their fields, allowing them to specify the desired number of sections or the target area for each section.

# Abstract
Farmers often have irregularly shaped fields that need to be divided into smaller sections for various purposes, such as crop rotation, irrigation management, or livestock grazing.However, manually dividing these irregular polygons into equal or desired-sized sections can be time-consuming and challenging. This project aims to address the challenges faced by farmers in subdividing irregularly shaped fields into smaller sections efficiently and automatically. The proposed solution is an algorithm and software tool that allows farmers to input an irregular polygon representing their field and specify the desired subdivision parameters, such as the number of sections or target area for each section.The resulting subdivided sections are generated as new polygons, and the solution also includes visualizations of the original field polygon and the resulting subdivisions to aid farmers in understanding and validating the division.

# Algorithm for Irregular Farm field division
The process begins with the initialization of the QGIS plugin, including the setup of the user interface and locale settings. Following this, a user dialog is displayed to gather essential input from the user, such as selecting an active vector layer, specifying an output file path, defining the target area, indicating absorption preferences, choosing the division direction, and setting a tolerance value.With user input in hand, the algorithm proceeds to execute the main task, known as the PolygonDividerTask. This task involves several critical components, including initialization, active vector layer validation, and preparation of the output writer.The subsequent step revolves around the iteration through the features of the active vector layer.

For each feature, the algorithm applies the polygon division process, making decisions based on the desired target areas and the main division direction (horizontal or vertical). The division process involves intricate calculations to ensure an equitable division of polygons.Subdividing features into smaller sections is a complex task that requires the algorithm to calculate optimal cutline coordinates using Brent's method. Error handling and progress tracking are integral aspects of this subdivision process.Following successful subdivision, the algorithm proceeds to write the divided features into the specified output file.Finally, the algorithm wraps up by displaying the resulting divided polygon layer in QGIS. This streamlined approach to polygon subdivision provides a valuable tool for land management, offering efficient and automated solutions for a range of agricultural and planning applications.

# Algorithm for Area Calculation
The algorithm initializes a hidden Tkinter window for user interaction and opens dialogs for selecting unused field(well,path) and divided farm field shapefiles.It calculates the total area of those two shapefiles separately, taking into account their geometries using GeoPandas.Users provide the farm name and farmer's name for the report.The total area is computed by summing the areas of the both input shapefiles.A report data string is generated, including the farm and farmer details, unused areas for divided polygons, used areas for divided regions, and the overall total area in both acres and square feet.In case of any errors during shapefile processing or if shapefiles are not selected, appropriate messages are displayed.This algorithm offers an intuitive way to generate informative reports for farm or land management, empowering users to assess and document their land division and usage efficiently.

# User Friendly Interface
We have developed a user friendly website using react js which helps users to navigate into QGIS tool and also helps to extract farmfield from Open Street Map directly from our website itself.It helps to receive messages or queries from farmers through mails.We also update our new launches to farmers for those who are signed in for latest updates in our website.Blogs page has review or testimonials about our project which will help new users to know about uses of our project. There are some more pages like services,about us to know more about our project. 
