namespace fetch_javascript.Models
{
    public class ToDo
    {
        public string Id { get; set; }

        public string Title { get; set; }

        public ToDo(string title)
        {

            Id = Guid.NewGuid().ToString();
            Title = title;
        }

    }
}
