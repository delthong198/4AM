using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UltimateNeverBug.Models.Repository;

namespace UltimateNeverBug.Models.DataManager
{
    public class VideoManager : IDataRepository<Video>
    {
        readonly DataContext _DataContext;
        public VideoManager(DataContext context)
        {
            _DataContext = context;
        }
        public IEnumerable<Video> GetAll()
        {
            return _DataContext.Videos
                .ToList();
        }
        public Video Get(long id)
        {
            var Video = _DataContext.Videos
                  .FirstOrDefault(e => e.VideoId == id);
            return Video;
        }
        public void Add(Video entity)
        {
            _DataContext.Videos.Add(entity);
            _DataContext.SaveChanges();
        }
        public void Update(Video Video, Video entity)
        {
            Video.Titlle = entity.Titlle;
            Video.SourceId = entity.SourceId;
            Video.Type = entity.Type;
            Video.Descrpition = entity.Descrpition;
            Video.CreateDate = entity.CreateDate;
            _DataContext.SaveChanges();
        }
        public void Delete(Video Video)
        {
            _DataContext.Videos.Remove(Video);
            _DataContext.SaveChanges();
        }
    }
}
